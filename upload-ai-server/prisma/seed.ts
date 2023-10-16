import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.prompt.deleteMany();

  await prisma.prompt.create({
    data: {
      title: "Tittel YouTube",
      template: `Din rolle er å generere tre titler for en YouTube-video.

Nedenfor vil du motta en transkripsjon av denne videoen, bruk denne transkripsjonen til å generere titlene.
Nedenfor vil du også motta en liste over titler, bruk denne listen som referanse for titlene som skal genereres.

Titler må ha maksimalt 60 tegn.
Titler må være iøynefallende og attraktive for å maksimere klikk.

Returner KUN de tre titlene i listeformat som i eksemplet nedenfor:
'''
- Tittel 1
- Tittel 2
- Tittel 3
'''

Transkripsjon:
'''
{transcription}
'''`.trim(),
    },
  });

  await prisma.prompt.create({
    data: {
      title: "Beskrivelse YouTube",
      template:
        `Din rolle er å generere en kortfattet beskrivelse for en YouTube-video.
  
Nedenfor vil du motta en transkripsjon av denne videoen, bruk denne transkripsjonen til å generere beskrivelsen.

Beskrivelsen må ha maksimalt 80 ord i den første personen som inneholder hovedpoengene i videoen.

Bruk iøynefallende ord som fanger oppmerksomheten til de som leser.

I tillegg, på slutten av beskrivelsen, inkluderer en liste med 3 til 10 hashtags med små bokstaver som inneholder videoens nøkkelord.

Returen må følge følgende format:
'''
Beskrivelse.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transkripsjon:
'''
{transcription}
'''`.trim(),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
