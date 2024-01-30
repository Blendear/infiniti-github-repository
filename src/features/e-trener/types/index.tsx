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
  "fota-miniaturki": `mini${number}-${number}.png`;
  nazwa: string;
  "cwiczone-miesnie": PartiaMiesniowa[];
  "fota-lokalizacji": `lok${number}.png`;
  idMaszynyUzywanej: string;
};

export type Cwiczenia = Cwiczenie[];
