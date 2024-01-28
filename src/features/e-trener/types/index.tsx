export type PartiaMiesniowa =
  | "Barki - Tył"
  | "Barki - Środek"
  | "Barki - Przód"
  | "Biceps"
  | "Brzuch - Góra"
  | "Brzuch - Dół"
  | "Klatka piersiowa - Góra"
  | "Klatka piersiowa - Środek"
  | "Klatka piersiowa - Dół"
  | "Łydki"
  | "Plecy - Góra"
  | "Plecy - Środek"
  | "Plecy - Dół"
  | "Pośladki"
  | "Przedramie - Góra"
  | "Przedramie - Dół"
  | "Skośne"
  | "Triceps"
  | "Uda - Przód"
  | "Uda - Tył"
  | "Uda - Środek";

export type Cwiczenie = {
  id: number;
  "link-wideo": string;
  "fota-miniaturki": `mini${number}.png`;
  nazwa: string;
  "cwiczone-miesnie": PartiaMiesniowa[];
  "fota-lokalizacji": `lok${number}.png`;
  idMaszynyUzywanej: string;
};

export type Cwiczenia = Cwiczenie[];

{
  id: 666,
  "link-wideo": "mO3fLuAFWrs",
  "fota-miniaturki": "mini666.png",
  nazwa: "AAAAAAA",
  "cwiczone-miesnie": ["Barki - Środek", "Barki - Przód", "Barki - Tył"],
  "fota-lokalizacji": "lok666.png",
  idMaszynyUzywanej: "666",
},
