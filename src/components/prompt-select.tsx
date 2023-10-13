import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { api } from "@/lib/axios";

export function PromptSelect() {
  const [prompts, setPrompts] = useState(null);

  useEffect(() => {
    api.get("/prompts").then((response) => {
      setPrompts(response.data);
    });
  }, []);

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Velg en prompt…" />
      </SelectTrigger>
      <SelectContent>{prompts}</SelectContent>
    </Select>
  );
}
