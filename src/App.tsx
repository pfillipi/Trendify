import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">trendify</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            ❤️‍🔥🇳🇴Skapt med lidenskap i hjertet av Norge.🇳🇴❤️‍🔥
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Vennligst del din prompt til kunstig intelligens…"
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultatet skapt av kunstig intelligens…"
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Husk at du enkelt kan inkludere transkripsjonsinnholdet fra den
            valgte videon ved å bruka{" "}
            <code className="text-violet-400">
              {"{transkripsjonsvariabelen}"}
            </code>{" "}
            i ledeteksten.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4"></FileVideo>
              Velg en video.
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />
            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">
                Transkripsjons prompt
              </Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Vennligst inkluder nøkkelord som ble nevnt i videon, og skill dem med komma (,)"
              />
            </div>
            <Button type="submit" className="w-full">
              Lagre video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>modell</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Snart vil du ha muligheten til å tilpasse dette alternativet
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>temperatur</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Når du øker verdiene, blir resultatet ofte mer kreativt, men det
                kan også føre til potensielle feil.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              send <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
