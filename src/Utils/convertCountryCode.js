

export default function convertCountryCode(givenCountry){
 
const countries =[
   { country: "United States Of America", code : "US"}, 
   { country: "USA", code : "US"},
   { country: "Andorra", code : "AD"},
   { country: "Anguilla", code :"AI"},
   { country: "Argentina" , code : "AR"},
   { country: "Australia" , code : "AU"},
   { country: "Austria" , code : "AT"},
   { country: "Azerbaijan" , code : "AZ"},
   { country: "Bahamas" , code : "BS"},
   { country: "Bahrain" , code : "BH"},
   { country: "Barbados" , code : "BB"},
   { country: "Belgium" , code : "BE"},
   { country: "Bermuda" , code : "BM"},
   { country: "Brazil" , code : "BR"},
   { country: "Bulgaria" , code : "BG"},
   { country: "Canada" , code : "CA"},
   { country: "Chile" , code : "CL"},
   { country: "China" , code : "CN"},
   { country: "Colombia" , code : "CO"},
   { country: "Costa Rica" , code : "CR"},
   { country: "Croatia" , code : "HR"},
   { country: "Cyprus" , code : "CY"},
   { country: "Czech Republic" , code : "CZ"},
   { country: "Denmark" , code : "DK"},
   { country: "Dominican Republic" , code : "DO"},
   { country: "Ecuador" , code : "EC"},
   { country: "Estonia" , code : "EE"},
   { country: "Faroe Islands" , code : "FO"},
   { country: "Finland" , code : "FI"},
   { country: "France" , code : "FR"},
   { country: "Georgia" , code : "GE"},
   { country: "Germany" , code : "DE"},
   { country: "Ghana" , code : "GH"},
   { country: "Gibraltar" , code : "GI"},
   { country: "Great Britain" , code : "GB"},
   { country: "UK" , code : "GB"},
   { country: "Scotland" , code : "GB"},
   { country: "England" , code : "GB"},
   { country: "Wales" , code : "GB"},
   { country: "Greece" , code : "GR"},
   { country: "Hong Kong" , code : "HK"},
   { country: "Hungary" , code : "HU"},
   { country: "Iceland" , code : "IS"},
   { country: "India" , code : "IN"},
   { country: "Ireland" , code : "IE"},
   { country: "Israel" , code : "IL"},
   { country: "Italy" , code : "IT"},
   { country: "Jamaica" , code : "JM"},
   { country: "Japan" , code : "JP"},
   { country: "Korea, Republic of" , code : "KR"},
   { country: "Latvia" , code : "LV"},
   { country: "Lebanon" , code : "LB"},
   { country: "Lithuania" , code : "LT"},
   { country: "Luxembourg" , code : "LU"},
   { country: "Malaysia" , code : "MY"},
   { country: "Malta" , code : "MT"},
   { country: "Mexico" , code : "MX"},
   { country: "Monaco" , code : "MC"},
   { country: "Montenegro" , code : "ME"},
   { country: "Morocco" , code : "MA"},
   { country: "Netherlands" , code : "NL"},
   { country: "Netherlands Antilles" , code : "AM"},
   { country: "New Zealand" , code : "NZ"},
   { country: "Northern Ireland" , code : "ND"},
   { country: "Norway" , code : "NO"},
   { country: "Peru" , code : "PE"},
   { country: "Poland" , code : "PL"},
   { country: "Portugal" , code : "PT"},
   { country: "Romania" , code : "RO"},
   { country: "Russian Federation" , code : "RU"},
   { country: "Saint Lucia" , code : "LC"},
   { country: "Saudi Arabia" , code : "SA"},
   { country: "Serbia" , code : "RS"},
   { country: "Singapore" , code : "SG"},
   { country: "Slovakia" , code : "SK"},
   { country: "Slovenia" , code : "SI"},
   { country: "South Africa" , code : "ZA"},
   { country: "Spain" , code : "ES"},
   { country: "Sweden" , code : "SE"},
   { country: "Switzerland" , code : "CH"},
   { country: "Taiwan" , code : "TW"},
   { country: "Thailand" , code : "TH"},
   { country: "Trinidad and Tobago" , code : "TT"},
   { country: "Turkey" , code : "TR"},
   { country: "Ukraine" , code : "UA"},
   { country: "United Arab Emirates" , code : "AE"},
   { country: "Uruguay" , code : "UY"},
   { country: "Venezuela" , code : "VE"}
]

      let countryObj=  countries.find(e => e.country === givenCountry)
        if (countryObj){
            return countryObj.code
        }else{
        console.log("error ", givenCountry, " is not a country on the list");
     }     
}