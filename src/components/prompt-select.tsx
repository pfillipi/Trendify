import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function PromptSelect() {
  const [prompts, setPrompts] = useState(null);

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Velg en prompt…" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="title">YouTube-tittel</SelectItem>
        <SelectItem value="description">YouTube beskrivelse</SelectItem>
      </SelectContent>
    </Select>
  );
}
