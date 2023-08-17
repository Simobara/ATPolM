
// eslint-disable-next-line 
const abbrRegioni = [
    'ABR', 'BAS', 'CAL', 'CAM', 'EMR', 'FVG', 'LAZ', 'LIG', 'LOM', 'MAR',
    'MOL', 'PIE', 'PUG', 'SAR', 'SIC', 'TOS', 'TRE', 'UMB', 'VAO', 'VEN',
];


// switch (selectedRegionValue) {
//     case "ABRUZZO":
//       formData.codice = "ABRUZZO";
//       formData.descrizione = "ABR";
//       break;
//     case "BASILICATA":
//       formData.codice = "BASILICATA";
//       formData.descrizione = "BAS";
//       break;
//     case "CALABRIA":
//       formData.codice = "CALABRIA";
//       formData.descrizione = "CAL";
//       break;
//     case "CAMPANIA":
//       formData.codice = "CAMPANIA";
//       formData.descrizione = "CAM";
//       break;
//     case "EMILIA-ROMAGNA":
//       formData.codice = "EMILIA-ROMAGNA";
//       formData.descrizione = "EMR";
//       break;
//     case "FRIULI-VENEZIA-GIULIA":
//       formData.codice = "FRIULI-VENEZIA-GIULIA";
//       formData.descrizione = "FVG";
//       break;
//     case "LAZIO":
//       formData.codice = "LAZIO";
//       formData.descrizione = "LAZ";
//       break;
//     case "LIGURIA":
//       formData.codice = "LIGURIA";
//       formData.descrizione = "LIG";
//       break;
//     case "LOMBARDIA":
//       formData.codice = "LOMBARDIA";
//       formData.descrizione = "LOM";
//       break;
//     case "MARCHE":
//       formData.codice = "MARCHE";
//       formData.descrizione = "MAR";
//       break;
//     case "MOLISE":
//       formData.codice = "MOLISE";
//       formData.descrizione = "MOL";
//       break;
//     case "PIEMONTE":
//       formData.codice = "PIEMONTE";
//       formData.descrizione = "PIE";
//       break;
//     case "PUGLIA":
//       formData.codice = "PUGLIA";
//       formData.descrizione = "PUG";
//       break;
//     case "SARDEGNA":
//       formData.codice = "SARDEGNA";
//       formData.descrizione = "SAR";
//       break;
//     case "SICILIA":
//       formData.codice = "SICILIA";
//       formData.descrizione = "SIC";
//       break;
//     case "TOSCANA":
//       formData.codice = "TOSCANA";
//       formData.descrizione = "TOS";
//       break;
//     case "TRENTINO":
//       formData.codice = "TRENTINO";
//       formData.descrizione = "TRE";
//       break;
//     case "UMBRIA":
//       formData.codice = "UMBRIA";
//       formData.descrizione = "UMB";
//       break;
//     case "VAL D'AOSTA":
//       formData.codice = "VAL D'AOSTA";
//       formData.descrizione = "VAO";
//       break;
//     case "VENETO":
//       formData.codice = "VENETO";
//       formData.descrizione = "VEN";
//       break;
//     default:
//       break;
//   }

const regionMappings = {
    "ABRUZZO": { codice: "ABR", descrizione: "ABRUZZO" },
    "BASILICATA": { codice: "BAS", descrizione: "BASILICATA" },
    "CALABRIA": { codice: "CAL", descrizione: "CALABRIA" },
    "CAMPANIA": { codice: "CAM", descrizione: "CAMPANIA" },
    "EMILIA-ROMAGNA": { codice: "EMR", descrizione: "EMILIA-ROMAGNA" },
    "FRIULI-VENEZIA-GIULIA": { codice: "FVG", descrizione: "FRIULI-VENEZIA-GIULIA" },
    "LAZIO": { codice: "LAZ", descrizione: "LAZIO" },
    "LIGURIA": { codice: "LIG", descrizione: "LIGURIA" },
    "LOMBARDIA": { codice: "LOM", descrizione: "LOMBARDIA" },
    "MARCHE": { codice: "MAR", descrizione: "MARCHE" },
    "MOLISE": { codice: "MOL", descrizione: "MOLISE" },
    "PIEMONTE": { codice: "PIE", descrizione: "PIEMONTE" },
    "PUGLIA": { codice: "PUG", descrizione: "PUGLIA" },
    "SARDEGNA": { codice: "SAR", descrizione: "SARDEGNA" },
    "SICILIA": { codice: "SIC", descrizione: "SICILIA" },
    "TOSCANA": { codice: "TOS", descrizione: "TOSCANA" },
    "TRENTINO": { codice: "TRE", descrizione: "TRENTINO" },
    "UMBRIA": { codice: "UMB", descrizione: "UMBRIA" },
    "VAL D'AOSTA": { codice: "VAO", descrizione: "VAL D'AOSTA" },
    "VENETO": { codice: "VEN", descrizione: "VENETO" },
};

export default regionMappings;


