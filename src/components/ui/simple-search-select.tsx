"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";

type Option = { value: string; label: string } | string;

type SimpleSearchSelectProps = {
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
  /** si true, le menu reste ouvert après sélection */
  keepOpenOnSelect?: boolean;
};

export function SimpleSearchSelect({
  value,
  onChange,
  options,
  placeholder = "Select…",
  searchPlaceholder = "Rechercher…",
  className,
  keepOpenOnSelect = false,
}: SimpleSearchSelectProps) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Normalise options -> { value, label }
  const normalized = React.useMemo(
    () =>
      options.map((o) =>
        typeof o === "string" ? { value: o, label: o } : o
      ),
    [options]
  );

  // Filtrage à chaque caractère
  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return normalized;
    return normalized.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        o.value.toLowerCase().includes(q)
    );
  }, [normalized, query]);

  // Force le focus sur l'input à l'ouverture (2 RAF pour dépasser le focus interne Radix)
  React.useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    let r1 = 0, r2 = 0;
    r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => {
        const el = inputRef.current;
        if (el) {
          el.focus({ preventScroll: true });
          const len = el.value.length;
          el.setSelectionRange(len, len); // curseur en fin
        }
      });
    });
    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
    };
  }, [open]);

  // Sélection
  const handleSelect = (v: string) => {
    onChange(v);
    if (!keepOpenOnSelect) {
      setOpen(false);
    } else {
      // garde l’input focus pour enchaîner d’autres sélections
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  };

  return (
    <Select
      value={value}
      onValueChange={handleSelect}
      open={open}
      onOpenChange={setOpen}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className="p-0">
        {/* Barre de recherche */}
        <div className="sticky top-0 z-10 bg-popover p-2 border-b">
          <Input
            ref={inputRef}
            placeholder={searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Liste filtrée */}
        <div className="max-h-64 overflow-auto">
          {filtered.length === 0 ? (
            <div className="px-3 py-2 text-sm text-muted-foreground">
              Aucun résultat
            </div>
          ) : (
            filtered.map((opt) => {
              const v = typeof opt === "string" ? opt : opt.value;
              const l = typeof opt === "string" ? opt : opt.label;
              return (
                <SelectItem key={v} value={v}>
                  {l}
                </SelectItem>
              );
            })
          )}
        </div>
      </SelectContent>
    </Select>
  );
}
