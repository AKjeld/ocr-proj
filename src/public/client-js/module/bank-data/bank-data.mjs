export class BankData {
    static getMockData() {
        return [
            ["Zalando", "5. april 2022", "438"],
            ["FirmaFirmasen", "6. april 2022", "100"],
            ["Netto", "4. april 2022", "40.2"],
            ["Byggemarked 2000", "2. april 2022", "5000"],
            ["Rød Aalborg", "16. april 2022", "2400"],
        ];
    }

    static getMockHeader() {
        return ["Afsender", "Dato", "Beløb"];
    }
}