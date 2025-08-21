"use client";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, Search } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";

type Option = { value: string; label: string } | string;

interface SearchBarProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  buttonLabel?: string;
  className?: string;
}

export function SearchBar({
  options,
  onSelect,
  placeholder = "Rechercher...",
  // searchPlaceholder = "Tapez pour filtrer...",
  buttonLabel = "Rechercher",
  className = "",

}: SearchBarProps) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const normalized = React.useMemo(
    () =>
      options.map((o) =>
        typeof o === "string" ? { value: o, label: o } : o
      ),
    [options]
  );

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase();
    return q
      ? normalized.filter(
        (o) =>
          o.label.toLowerCase().includes(q) ||
          o.value.toLowerCase().includes(q)
      )
      : normalized;
  }, [normalized, query]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className)}
        >
          <Search className="mr-2 h-4 w-4 opacity-70" />
          {buttonLabel}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-64">
        <Command>
          <CommandInput
            placeholder={placeholder}
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>Aucun résultat</CommandEmpty>
            <CommandGroup heading="Résultats">
              {filtered.map((opt) => {
                const v = typeof opt === "string" ? opt : opt.value;
                const l = typeof opt === "string" ? opt : opt.label;
                return (
                  <CommandItem
                    key={v}
                    value={l}
                    onSelect={() => {
                      onSelect(v);
                      setOpen(false);
                      setQuery(""); // reset
                    }}
                  >
                    <Check className="mr-2 h-4 w-4 opacity-0 group-data-[selected=true]:opacity-100" />
                    {l}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
