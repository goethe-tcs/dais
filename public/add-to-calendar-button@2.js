/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/add-to-calendar-button@2.4.1/dist/atcb.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
!(function () {
  window.atcb_action = function (a, o, n = !1) {
    var [a, o, n = !1] = [a, o, n]
    if (l()) {
      if (
        (((a = s(a)).hideBranding = !0),
        ((a = null != a.proKey && "" != a.proKey ? Ot(a.proKey) : a).debug =
          "true" === a.debug),
        tt(a))
      ) {
        a = J(a)
        let e = document.body
        if (
          ((a.trigger = "click"),
          o
            ? (null != (e = o).id && "" != o.id
                ? (a.identifier = o.id)
                : (null != a.identifier &&
                  "" != a.identifier &&
                  /^[\w\-_]+$/.test(a.identifier)
                    ? (a.identifier = "atcb-btn-" + a.identifier)
                    : (a.identifier = "atcb-btn-custom"),
                  (o.id = a.identifier)),
              ("dropdown" !== a.listStyle &&
                "dropdown-static" !== a.listStyle &&
                "dropup-static" !== a.listStyle) ||
                (a.listStyle = "modal"))
            : ((a.identifier = "atcb-btn-custom"), (a.listStyle = "modal")),
          et(a))
        ) {
          var i = 1 === a.options.length,
            r = document.getElementById(
              "atcb-customTrigger-" + a.identifier + "-host",
            )
          if (
            (r &&
              (v(r.shadowRoot, !1),
              S["" + S.active] && delete S["" + S.active],
              r.remove()),
            C("initialization", a.identifier, a.identifier),
            !a.blockInteraction)
          ) {
            let t = null
            ;(!i ||
              ("apple" !== a.options[0] && "ical" !== a.options[0]) ||
              (a.dates && 1 < a.dates.length && a.dates.organizer) ||
              Y()) &&
              (((t = document.createElement("div")).id =
                "atcb-customTrigger-" + a.identifier + "-host"),
              e == document.body ? document.body.append(t) : e.after(t),
              o &&
                ((r = o.getBoundingClientRect()),
                (t.style.position = "relative"),
                (t.style.left = -r.width + "px"),
                (t.style.top = r.height + "px")),
              t.setAttribute("atcb-button-id", a.identifier),
              t.attachShadow({ mode: "open", delegateFocus: !0 }),
              ((r = document.createElement("template")).innerHTML = Yt),
              t.shadowRoot.append(r.content.cloneNode(!0)),
              (r = t.shadowRoot.querySelector(".atcb-initialized")),
              Bt(a),
              O(t.shadowRoot, a),
              t.shadowRoot
                .querySelector(".atcb-initialized")
                .setAttribute("lang", a.language),
              Rt(t.shadowRoot, r, a.buttonStyle, !1, !1, a.customCss),
              Nt(t.shadowRoot, a)),
              i
                ? (y(t.shadowRoot, a.options[0], a, "all", n),
                  C("openSingletonLink", a.identifier, a.identifier))
                : x(t.shadowRoot, "open", a, o, n)
          }
          return (
            Ut(a.proKey, a.debug),
            a.debug &&
              console.log(
                'Add to Calendar Button "' + a.identifier + '" triggered',
              ),
            a.identifier
          )
        }
      }
      console.error(a.validationError)
    }
  }
  /*!
   *  @preserve
   *
   * ++++++++++++++++++++++++++++++++++++++
   * Add to Calendar TimeZones iCal Library
   * ++++++++++++++++++++++++++++++++++++++
   *
   * Version: 1.7.1
   * Creator: Jens Kuerschner (https://jenskuerschner.de)
   * Project: https://github.com/add2cal/timezones-ical-library
   * License: Apache-2.0
   *
   */
  const r = {
      Africa: {
        Abidjan: ["", 0],
        Accra: ["Africa/Abidjan", 0],
        Addis_Ababa: ["Africa/Nairobi", 1],
        Algiers: ["", 2],
        Asmara: ["Africa/Nairobi", 1],
        Asmera: ["Africa/Nairobi", 1],
        Bamako: ["Africa/Abidjan", 0],
        Bangui: ["Africa/Lagos", 3],
        Banjul: ["Africa/Abidjan", 0],
        Bissau: ["", 0],
        Blantyre: ["Africa/Maputo", 4],
        Brazzaville: ["Africa/Lagos", 3],
        Bujumbura: ["Africa/Maputo", 4],
        Cairo: ["", 5],
        Casablanca: ["", 6],
        Ceuta: ["", 7],
        Conakry: ["Africa/Abidjan", 0],
        Dakar: ["Africa/Abidjan", 0],
        Dar_es_Salaam: ["Africa/Nairobi", 1],
        Djibouti: ["Africa/Nairobi", 1],
        Douala: ["Africa/Lagos", 3],
        El_Aaiun: ["", 6],
        Freetown: ["Africa/Abidjan", 0],
        Gaborone: ["Africa/Maputo", 4],
        Harare: ["Africa/Maputo", 4],
        Johannesburg: ["", 8],
        Juba: ["", 4],
        Kampala: ["Africa/Nairobi", 1],
        Khartoum: ["", 4],
        Kigali: ["Africa/Maputo", 4],
        Kinshasa: ["Africa/Lagos", 3],
        Lagos: ["", 3],
        Libreville: ["Africa/Lagos", 3],
        Lome: ["Africa/Abidjan", 0],
        Luanda: ["Africa/Lagos", 3],
        Lubumbashi: ["Africa/Maputo", 4],
        Lusaka: ["Africa/Maputo", 4],
        Malabo: ["Africa/Lagos", 3],
        Maputo: ["", 4],
        Maseru: ["Africa/Johannesburg", 8],
        Mbabane: ["Africa/Johannesburg", 8],
        Mogadishu: ["Africa/Nairobi", 1],
        Monrovia: ["", 0],
        Nairobi: ["", 1],
        Ndjamena: ["", 3],
        Niamey: ["Africa/Lagos", 3],
        Nouakchott: ["Africa/Abidjan", 0],
        Ouagadougou: ["Africa/Abidjan", 0],
        "Porto-Novo": ["Africa/Lagos", 3],
        Sao_Tome: ["", 0],
        Timbuktu: ["Africa/Abidjan", 0],
        Tripoli: ["", 9],
        Tunis: ["", 2],
        Windhoek: ["", 4],
      },
      America: {
        Adak: ["", 10],
        Anchorage: ["", 11],
        Anguilla: ["America/Puerto_Rico", 12],
        Antigua: ["America/Puerto_Rico", 12],
        Araguaina: ["", 13],
        Argentina: {
          Buenos_Aires: ["", 13],
          Catamarca: ["", 13],
          ComodRivadavia: ["America/Argentina/Catamarca", 13],
          Cordoba: ["", 13],
          Jujuy: ["", 13],
          La_Rioja: ["", 13],
          Mendoza: ["", 13],
          Rio_Gallegos: ["", 13],
          Salta: ["", 13],
          San_Juan: ["", 13],
          San_Luis: ["", 13],
          Tucuman: ["", 13],
          Ushuaia: ["", 13],
        },
        Aruba: ["America/Puerto_Rico", 12],
        Asuncion: ["", 14],
        Atikokan: ["America/Panama", 15],
        Atka: ["America/Adak", 10],
        Bahia_Banderas: ["", 16],
        Bahia: ["", 13],
        Barbados: ["", 12],
        Belem: ["", 13],
        Belize: ["", 16],
        "Blanc-Sablon": ["America/Puerto_Rico", 12],
        Boa_Vista: ["", 17],
        Bogota: ["", 18],
        Boise: ["", 19],
        Buenos_Aires: ["America/Argentina/Buenos_Aires", 13],
        Cambridge_Bay: ["", 19],
        Campo_Grande: ["", 17],
        Cancun: ["", 15],
        Caracas: ["", 17],
        Catamarca: ["America/Argentina/Catamarca", 13],
        Cayenne: ["", 13],
        Cayman: ["America/Panama", 15],
        Chicago: ["", 20],
        Chihuahua: ["", 16],
        Ciudad_Juarez: ["", 19],
        Coral_Harbour: ["America/Panama", 15],
        Cordoba: ["America/Argentina/Cordoba", 13],
        Costa_Rica: ["", 16],
        Creston: ["America/Phoenix", 21],
        Cuiaba: ["", 17],
        Curacao: ["America/Puerto_Rico", 12],
        Danmarkshavn: ["", 0],
        Dawson_Creek: ["", 21],
        Dawson: ["", 21],
        Denver: ["", 19],
        Detroit: ["", 22],
        Dominica: ["America/Puerto_Rico", 12],
        Edmonton: ["", 19],
        Eirunepe: ["", 18],
        El_Salvador: ["", 16],
        Ensenada: ["America/Tijuana", 23],
        Fort_Nelson: ["", 21],
        Fort_Wayne: ["America/Indiana/Indianapolis", 22],
        Fortaleza: ["", 13],
        Glace_Bay: ["", 24],
        Godthab: ["America/Nuuk", 25],
        Goose_Bay: ["", 26],
        Grand_Turk: ["", 27],
        Grenada: ["America/Puerto_Rico", 12],
        Guadeloupe: ["America/Puerto_Rico", 12],
        Guatemala: ["", 16],
        Guayaquil: ["", 18],
        Guyana: ["", 17],
        Halifax: ["", 24],
        Havana: ["", 28],
        Hermosillo: ["", 21],
        Indiana: {
          Indianapolis: ["", 22],
          Knox: ["", 20],
          Marengo: ["", 22],
          Petersburg: ["", 22],
          Tell_City: ["", 20],
          Vevay: ["", 22],
          Vincennes: ["", 22],
          Winamac: ["", 27],
        },
        Indianapolis: ["America/Indiana/Indianapolis", 22],
        Inuvik: ["", 19],
        Iqaluit: ["", 22],
        Jamaica: ["", 15],
        Jujuy: ["America/Argentina/Jujuy", 13],
        Juneau: ["", 11],
        Kentucky: { Louisville: ["", 22], Monticello: ["", 22] },
        Knox_IN: ["America/Indiana/Knox", 20],
        Kralendijk: ["America/Puerto_Rico", 12],
        La_Paz: ["", 17],
        Lima: ["", 18],
        Los_Angeles: ["", 23],
        Louisville: ["America/Kentucky/Louisville", 22],
        Lower_Princes: ["America/Puerto_Rico", 12],
        Maceio: ["", 13],
        Managua: ["", 16],
        Manaus: ["", 17],
        Marigot: ["America/Puerto_Rico", 12],
        Martinique: ["", 12],
        Matamoros: ["", 20],
        Mazatlan: ["", 21],
        Mendoza: ["America/Argentina/Mendoza", 13],
        Menominee: ["", 20],
        Merida: ["", 16],
        Metlakatla: ["", 11],
        Mexico_City: ["", 16],
        Miquelon: ["", 29],
        Moncton: ["", 24],
        Monterrey: ["", 16],
        Montevideo: ["", 13],
        Montreal: ["America/Toronto", 22],
        Montserrat: ["America/Puerto_Rico", 12],
        Nassau: ["America/Toronto", 22],
        New_York: ["", 22],
        Nipigon: ["America/Toronto", 22],
        Nome: ["", 11],
        Noronha: ["", 30],
        North_Dakota: {
          Beulah: ["", 20],
          Center: ["", 20],
          New_Salem: ["", 20],
        },
        Nuuk: ["", 25],
        Ojinaga: ["", 20],
        Panama: ["", 15],
        Pangnirtung: ["America/Iqaluit", 22],
        Paramaribo: ["", 13],
        Phoenix: ["", 21],
        Port_of_Spain: ["America/Puerto_Rico", 12],
        "Port-au-Prince": ["", 22],
        Porto_Acre: ["America/Rio_Branco", 18],
        Porto_Velho: ["", 17],
        Puerto_Rico: ["", 12],
        Punta_Arenas: ["", 13],
        Rainy_River: ["America/Winnipeg", 20],
        Rankin_Inlet: ["", 20],
        Recife: ["", 13],
        Regina: ["", 16],
        Resolute: ["", 31],
        Rio_Branco: ["", 18],
        Rosario: ["America/Argentina/Cordoba", 13],
        Santa_Isabel: ["America/Tijuana", 23],
        Santarem: ["", 13],
        Santiago: ["", 32],
        Santo_Domingo: ["", 12],
        Sao_Paulo: ["", 13],
        Scoresbysund: ["", 33],
        Shiprock: ["America/Denver", 19],
        Sitka: ["", 11],
        St_Barthelemy: ["America/Puerto_Rico", 12],
        St_Johns: ["", 34],
        St_Kitts: ["America/Puerto_Rico", 12],
        St_Lucia: ["America/Puerto_Rico", 12],
        St_Thomas: ["America/Puerto_Rico", 12],
        St_Vincent: ["America/Puerto_Rico", 12],
        Swift_Current: ["", 16],
        Tegucigalpa: ["", 16],
        Thule: ["", 35],
        Thunder_Bay: ["America/Toronto", 22],
        Tijuana: ["", 23],
        Toronto: ["", 22],
        Tortola: ["America/Puerto_Rico", 12],
        Vancouver: ["", 23],
        Virgin: ["America/Puerto_Rico", 12],
        Whitehorse: ["", 21],
        Winnipeg: ["", 20],
        Yakutat: ["", 11],
        Yellowknife: ["America/Edmonton", 19],
      },
      Antarctica: {
        Casey: ["", 36],
        Davis: ["", 37],
        DumontDUrville: ["Pacific/Port_Moresby", 38],
        Macquarie: ["", 39],
        Mawson: ["", 40],
        McMurdo: ["Pacific/Auckland", 41],
        Palmer: ["", 13],
        Rothera: ["", 42],
        South_Pole: ["Pacific/Auckland", 41],
        Syowa: ["Asia/Riyadh", 43],
        Troll: ["", 44],
        Vostok: ["Asia/Urumqi", 45],
      },
      Arctic: { Longyearbyen: ["Europe/Berlin", 46] },
      Asia: {
        Aden: ["Asia/Riyadh", 43],
        Almaty: ["", 45],
        Amman: ["", 43],
        Anadyr: ["", 47],
        Aqtau: ["", 40],
        Aqtobe: ["", 40],
        Ashgabat: ["", 40],
        Ashkhabad: ["Asia/Ashgabat", 40],
        Atyrau: ["", 40],
        Baghdad: ["", 43],
        Bahrain: ["Asia/Qatar", 43],
        Baku: ["", 48],
        Bangkok: ["", 37],
        Barnaul: ["", 49],
        Beirut: ["", 50],
        Bishkek: ["", 45],
        Brunei: ["Asia/Kuching", 51],
        Calcutta: ["Asia/Kolkata", 52],
        Chita: ["", 53],
        Choibalsan: ["", 51],
        Chongqing: ["Asia/Shanghai", 54],
        Chungking: ["Asia/Shanghai", 54],
        Colombo: ["", 55],
        Dacca: ["Asia/Dhaka", 45],
        Damascus: ["", 43],
        Dhaka: ["", 45],
        Dili: ["", 56],
        Dubai: ["", 48],
        Dushanbe: ["", 40],
        Famagusta: ["", 57],
        Gaza: ["", 58],
        Harbin: ["Asia/Shanghai", 54],
        Hebron: ["", 58],
        Ho_Chi_Minh: ["", 37],
        Hong_Kong: ["", 59],
        Hovd: ["", 37],
        Irkutsk: ["", 60],
        Istanbul: ["Europe/Istanbul", 61],
        Jakarta: ["", 62],
        Jayapura: ["", 63],
        Jerusalem: ["", 64],
        Kabul: ["", 65],
        Kamchatka: ["", 47],
        Karachi: ["", 66],
        Kashgar: ["Asia/Urumqi", 45],
        Kathmandu: ["", 67],
        Katmandu: ["Asia/Kathmandu", 67],
        Khandyga: ["", 53],
        Kolkata: ["", 52],
        Krasnoyarsk: ["", 49],
        Kuala_Lumpur: ["Asia/Singapore", 51],
        Kuching: ["", 51],
        Kuwait: ["Asia/Riyadh", 43],
        Macao: ["Asia/Macau", 54],
        Macau: ["", 54],
        Magadan: ["", 68],
        Makassar: ["", 69],
        Manila: ["", 70],
        Muscat: ["Asia/Dubai", 48],
        Nicosia: ["", 71],
        Novokuznetsk: ["", 49],
        Novosibirsk: ["", 49],
        Omsk: ["", 72],
        Oral: ["", 40],
        Phnom_Penh: ["Asia/Bangkok", 37],
        Pontianak: ["", 62],
        Pyongyang: ["", 73],
        Qatar: ["", 43],
        Qostanay: ["", 45],
        Qyzylorda: ["", 40],
        Rangoon: ["Asia/Yangon", 74],
        Riyadh: ["", 43],
        Saigon: ["Asia/Ho_Chi_Minh", 37],
        Sakhalin: ["", 68],
        Samarkand: ["", 40],
        Seoul: ["", 73],
        Shanghai: ["", 54],
        Singapore: ["", 51],
        Srednekolymsk: ["", 68],
        Taipei: ["", 54],
        Tashkent: ["", 40],
        Tbilisi: ["", 48],
        Tehran: ["", 75],
        Tel_Aviv: ["Asia/Jerusalem", 64],
        Thimbu: ["Asia/Thimphu", 45],
        Thimphu: ["", 45],
        Tokyo: ["", 76],
        Tomsk: ["", 49],
        Ujung_Pandang: ["Asia/Makassar", 69],
        Ulaanbaatar: ["", 51],
        Ulan_Bator: ["Asia/Ulaanbaatar", 51],
        Urumqi: ["", 45],
        "Ust-Nera": ["", 77],
        Vientiane: ["Asia/Bangkok", 37],
        Vladivostok: ["", 77],
        Yakutsk: ["", 53],
        Yangon: ["", 74],
        Yekaterinburg: ["", 78],
        Yerevan: ["", 48],
      },
      Atlantic: {
        Azores: ["", 79],
        Bermuda: ["", 24],
        Canary: ["", 80],
        Cape_Verde: ["", 81],
        Faeroe: ["Atlantic/Faroe", 82],
        Faroe: ["", 82],
        Jan_Mayen: ["Europe/Berlin", 46],
        Madeira: ["", 80],
        Reykjavik: ["Africa/Abidjan", 0],
        South_Georgia: ["", 30],
        St_Helena: ["Africa/Abidjan", 0],
        Stanley: ["", 13],
      },
      Australia: {
        ACT: ["Australia/Sydney", 39],
        Adelaide: ["", 83],
        Brisbane: ["", 84],
        Broken_Hill: ["", 83],
        Canberra: ["Australia/Sydney", 39],
        Currie: ["Australia/Hobart", 85],
        Darwin: ["", 86],
        Eucla: ["", 87],
        Hobart: ["", 85],
        LHI: ["Australia/Lord_Howe", 88],
        Lindeman: ["", 84],
        Lord_Howe: ["", 88],
        Melbourne: ["", 39],
        North: ["Australia/Darwin", 86],
        NSW: ["Australia/Sydney", 39],
        Perth: ["", 89],
        Queensland: ["Australia/Brisbane", 84],
        South: ["Australia/Adelaide", 83],
        Sydney: ["", 39],
        Tasmania: ["Australia/Hobart", 85],
        Victoria: ["Australia/Melbourne", 39],
        West: ["Australia/Perth", 89],
        Yancowinna: ["Australia/Broken_Hill", 83],
      },
      Brazil: {
        Acre: ["America/Rio_Branco", 18],
        DeNoronha: ["America/Noronha", 30],
        East: ["America/Sao_Paulo", 13],
        West: ["America/Manaus", 17],
      },
      Canada: {
        Atlantic: ["America/Halifax", 24],
        Central: ["America/Winnipeg", 20],
        Eastern: ["America/Toronto", 22],
        Mountain: ["America/Edmonton", 19],
        Newfoundland: ["America/St_Johns", 34],
        Pacific: ["America/Vancouver", 23],
        Saskatchewan: ["America/Regina", 16],
        Yukon: ["America/Whitehorse", 21],
      },
      CET: ["", 46],
      Chile: {
        Continental: ["America/Santiago", 32],
        EasterIsland: ["Pacific/Easter", 90],
      },
      CST6CDT: ["", 20],
      Cuba: ["America/Havana", 28],
      EET: ["", 57],
      Egypt: ["Africa/Cairo", 5],
      Eire: ["Europe/Dublin", 91],
      EST: ["", 15],
      EST5EDT: ["", 22],
      Etc: {
        "GMT-0": ["Etc/GMT", 92],
        "GMT-1": ["", 93],
        "GMT-10": ["", 77],
        "GMT-11": ["", 68],
        "GMT-12": ["", 47],
        "GMT-13": ["", 94],
        "GMT-14": ["", 95],
        "GMT-2": ["", 96],
        "GMT-3": ["", 61],
        "GMT-4": ["", 97],
        "GMT-5": ["", 78],
        "GMT-6": ["", 72],
        "GMT-7": ["", 49],
        "GMT-8": ["", 60],
        "GMT-9": ["", 53],
        GMT: ["", 92],
        "GMT+0": ["Etc/GMT", 92],
        "GMT+1": ["", 98],
        "GMT+10": ["", 99],
        "GMT+11": ["", 100],
        "GMT+12": ["", 101],
        "GMT+2": ["", 30],
        "GMT+3": ["", 13],
        "GMT+4": ["", 17],
        "GMT+5": ["", 18],
        "GMT+6": ["", 102],
        "GMT+7": ["", 103],
        "GMT+8": ["", 104],
        "GMT+9": ["", 105],
        GMT0: ["Etc/GMT", 92],
        Greenwich: ["Etc/GMT", 92],
        UCT: ["Etc/UTC", 106],
        Universal: ["Etc/UTC", 106],
        UTC: ["", 106],
        Zulu: ["Etc/UTC", 106],
      },
      Europe: {
        Amsterdam: ["Europe/Brussels", 46],
        Andorra: ["", 46],
        Astrakhan: ["", 97],
        Athens: ["", 57],
        Belfast: ["Europe/London", 107],
        Belgrade: ["", 7],
        Berlin: ["", 46],
        Bratislava: ["Europe/Prague", 46],
        Brussels: ["", 46],
        Bucharest: ["", 108],
        Budapest: ["", 46],
        Busingen: ["Europe/Zurich", 7],
        Chisinau: ["", 109],
        Copenhagen: ["Europe/Berlin", 46],
        Dublin: ["", 91],
        Gibraltar: ["", 46],
        Guernsey: ["Europe/London", 107],
        Helsinki: ["", 57],
        Isle_of_Man: ["Europe/London", 107],
        Istanbul: ["", 61],
        Jersey: ["Europe/London", 107],
        Kaliningrad: ["", 110],
        Kiev: ["Europe/Kyiv", 111],
        Kirov: ["", 112],
        Kyiv: ["", 111],
        Lisbon: ["", 113],
        Ljubljana: ["Europe/Belgrade", 7],
        London: ["", 107],
        Luxembourg: ["Europe/Brussels", 46],
        Madrid: ["", 7],
        Malta: ["", 46],
        Mariehamn: ["Europe/Helsinki", 57],
        Minsk: ["", 43],
        Monaco: ["Europe/Paris", 46],
        Moscow: ["", 112],
        Nicosia: ["Asia/Nicosia", 71],
        Oslo: ["Europe/Berlin", 46],
        Paris: ["", 46],
        Podgorica: ["Europe/Belgrade", 7],
        Prague: ["", 46],
        Riga: ["", 57],
        Rome: ["", 46],
        Samara: ["", 97],
        San_Marino: ["Europe/Rome", 46],
        Sarajevo: ["Europe/Belgrade", 7],
        Saratov: ["", 97],
        Simferopol: ["", 112],
        Skopje: ["Europe/Belgrade", 7],
        Sofia: ["", 57],
        Stockholm: ["Europe/Berlin", 46],
        Tallinn: ["", 57],
        Tirane: ["", 46],
        Tiraspol: ["Europe/Chisinau", 109],
        Ulyanovsk: ["", 97],
        Uzhgorod: ["Europe/Kyiv", 111],
        Vaduz: ["Europe/Zurich", 7],
        Vatican: ["Europe/Rome", 46],
        Vienna: ["", 46],
        Vilnius: ["", 57],
        Volgograd: ["", 112],
        Warsaw: ["", 46],
        Zagreb: ["Europe/Belgrade", 7],
        Zaporozhye: ["Europe/Kyiv", 111],
        Zurich: ["", 7],
      },
      "GB-Eire": ["Europe/London", 107],
      GB: ["Europe/London", 107],
      "GMT-0": ["Etc/GMT", 92],
      GMT: ["Etc/GMT", 92],
      "GMT+0": ["Etc/GMT", 92],
      GMT0: ["Etc/GMT", 92],
      Greenwich: ["Etc/GMT", 92],
      Hongkong: ["Asia/Hong_Kong", 59],
      HST: ["", 114],
      Iceland: ["Africa/Abidjan", 0],
      Indian: {
        Antananarivo: ["Africa/Nairobi", 1],
        Chagos: ["", 45],
        Christmas: ["Asia/Bangkok", 37],
        Cocos: ["Asia/Yangon", 74],
        Comoro: ["Africa/Nairobi", 1],
        Kerguelen: ["Indian/Maldives", 40],
        Mahe: ["Asia/Dubai", 48],
        Maldives: ["", 40],
        Mauritius: ["", 48],
        Mayotte: ["Africa/Nairobi", 1],
        Reunion: ["Asia/Dubai", 48],
      },
      Iran: ["Asia/Tehran", 75],
      Israel: ["Asia/Jerusalem", 64],
      Jamaica: ["America/Jamaica", 15],
      Japan: ["Asia/Tokyo", 76],
      Kwajalein: ["Pacific/Kwajalein", 115],
      Libya: ["Africa/Tripoli", 9],
      MET: ["", 116],
      Mexico: {
        BajaNorte: ["America/Tijuana", 23],
        BajaSur: ["America/Mazatlan", 21],
        General: ["America/Mexico_City", 16],
      },
      MST: ["", 21],
      MST7MDT: ["", 19],
      Navajo: ["America/Denver", 19],
      "NZ-CHAT": ["Pacific/Chatham", 117],
      NZ: ["Pacific/Auckland", 41],
      Pacific: {
        Apia: ["", 118],
        Auckland: ["", 41],
        Bougainville: ["", 36],
        Chatham: ["", 117],
        Chuuk: ["Pacific/Port_Moresby", 38],
        Easter: ["", 90],
        Efate: ["", 36],
        Enderbury: ["Pacific/Kanton", 118],
        Fakaofo: ["", 118],
        Fiji: ["", 115],
        Funafuti: ["Pacific/Tarawa", 115],
        Galapagos: ["", 102],
        Gambier: ["", 119],
        Guadalcanal: ["", 36],
        Guam: ["", 120],
        Honolulu: ["", 114],
        Johnston: ["Pacific/Honolulu", 114],
        Kanton: ["", 118],
        Kiritimati: ["", 121],
        Kosrae: ["", 36],
        Kwajalein: ["", 115],
        Majuro: ["Pacific/Tarawa", 115],
        Marquesas: ["", 122],
        Midway: ["Pacific/Pago_Pago", 123],
        Nauru: ["", 115],
        Niue: ["", 124],
        Norfolk: ["", 125],
        Noumea: ["", 36],
        Pago_Pago: ["", 123],
        Palau: ["", 56],
        Pitcairn: ["", 126],
        Pohnpei: ["Pacific/Guadalcanal", 36],
        Ponape: ["Pacific/Guadalcanal", 36],
        Port_Moresby: ["", 38],
        Rarotonga: ["", 127],
        Saipan: ["Pacific/Guam", 120],
        Samoa: ["Pacific/Pago_Pago", 123],
        Tahiti: ["", 127],
        Tarawa: ["", 115],
        Tongatapu: ["", 118],
        Truk: ["Pacific/Port_Moresby", 38],
        Wake: ["Pacific/Tarawa", 115],
        Wallis: ["Pacific/Tarawa", 115],
        Yap: ["Pacific/Port_Moresby", 38],
      },
      Poland: ["Europe/Warsaw", 46],
      Portugal: ["Europe/Lisbon", 113],
      PRC: ["Asia/Shanghai", 54],
      PST8PDT: ["", 23],
      ROC: ["Asia/Taipei", 54],
      ROK: ["Asia/Seoul", 73],
      Singapore: ["Asia/Singapore", 51],
      Turkey: ["Europe/Istanbul", 61],
      UCT: ["Etc/UTC", 106],
      Universal: ["Etc/UTC", 106],
      US: {
        Alaska: ["America/Anchorage", 11],
        Aleutian: ["America/Adak", 10],
        Arizona: ["America/Phoenix", 21],
        Central: ["America/Chicago", 20],
        "East-Indiana": ["America/Indiana/Indianapolis", 22],
        Eastern: ["America/New_York", 22],
        Hawaii: ["Pacific/Honolulu", 114],
        "Indiana-Starke": ["America/Indiana/Knox", 20],
        Michigan: ["America/Detroit", 22],
        Mountain: ["America/Denver", 19],
        Pacific: ["America/Los_Angeles", 23],
        Samoa: ["Pacific/Pago_Pago", 123],
      },
      UTC: ["Etc/UTC", 106],
      "W-SU": ["Europe/Moscow", 112],
      WET: ["", 82],
      Zulu: ["Etc/UTC", 106],
    },
    e = [
      "20230517T170335Z<n><bs><n><tz>GMT<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>EAT<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>CET<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>WAT<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>CAT<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700424T000000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=-1FR<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701030T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+01<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>CEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>CET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>SAST<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>EET<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>HDT<n><of>-1000<n><ot>-0900<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>HST<n><of>-0900<n><ot>-1000<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>AKDT<n><of>-0900<n><ot>-0800<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AKST<n><of>-0800<n><ot>-0900<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>AST<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-03<n><of>-0300<n><ot>-0300<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19701004T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700322T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=4SU<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>EST<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>CST<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-04<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-05<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>MDT<n><of>-0700<n><ot>-0600<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>MST<n><of>-0600<n><ot>-0700<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>MST<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>PDT<n><of>-0800<n><ot>-0700<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>PST<n><of>-0700<n><ot>-0800<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>-01<n><of>-0200<n><ot>-0100<n><s>19700328T230000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n><bs><n><tz>-02<n><of>-0100<n><ot>-0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
      "20230517T170336Z<n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
      "20230517T170336Z<n><bs><n><tz>CST<n><of>-0400<n><ot>-0500<n><s>19701101T010000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0500<n><ot>-0400<n><s>19700308T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
      "20230517T170336Z<n><bd><n><tz>-02<n><of>-0300<n><ot>-0200<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>-03<n><of>-0200<n><ot>-0300<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-02<n><of>-0200<n><ot>-0200<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
      "20230517T170336Z<n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700405T000000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19700906T000000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SU<n><ed><n>",
      "20230517T170335Z<n><bd><n><tz>+00<n><of>-0100<n><ot>+0000<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>-01<n><of>+0000<n><ot>-0100<n><s>19701025T010000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>NST<n><of>-0230<n><ot>-0330<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>NDT<n><of>-0330<n><ot>-0230<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
      "20230517T170335Z<n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+11<n><of>+1100<n><ot>+1100<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+07<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+10<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>",
      "20230517T170335Z<n><bs><n><tz>+05<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>NZDT<n><of>+1200<n><ot>+1300<n><s>19700927T020000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>NZST<n><of>+1300<n><ot>+1200<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>-03<n><of>-0300<n><ot>-0300<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+03<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>+02<n><of>+0000<n><ot>+0200<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>+00<n><of>+0200<n><ot>+0000<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+06<n><of>+0600<n><ot>+0600<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>CEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>CET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+12<n><of>+1200<n><ot>+1200<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+04<n><of>+0400<n><ot>+0400<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+07<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+08<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>IST<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+09<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>CST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+0530<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+09<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701024T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700328T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n>",
      "20230517T170335Z<n><bs><n><tz>HKT<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+08<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+03<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>WIB<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>WIT<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>IDT<n><of>+0200<n><ot>+0300<n><s>19700327T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR<n><ed><n><bs><n><tz>IST<n><of>+0300<n><ot>+0200<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+0430<n><of>+0430<n><ot>+0430<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>PKT<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+0545<n><of>+0545<n><ot>+0545<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+11<n><of>+1100<n><ot>+1100<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>WITA<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>PST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>",
      "20230517T170336Z<n><bs><n><tz>+06<n><of>+0600<n><ot>+0600<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>KST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+0630<n><of>+0630<n><ot>+0630<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+0330<n><of>+0330<n><ot>+0330<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>JST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+10<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+05<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>+00<n><of>-0100<n><ot>+0000<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>-01<n><of>+0000<n><ot>-0100<n><s>19701025T010000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>-01<n><of>-0100<n><ot>-0100<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>ACST<n><of>+1030<n><ot>+0930<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>ACDT<n><of>+0930<n><ot>+1030<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>",
      "20230517T170335Z<n><bs><n><tz>AEST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>ACST<n><of>+0930<n><ot>+0930<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+0845<n><of>+0845<n><ot>+0845<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+1030<n><of>+1100<n><ot>+1030<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>+11<n><of>+1030<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>",
      "20230517T170335Z<n><bs><n><tz>AWST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-06<n><of>-0500<n><ot>-0600<n><s>19700404T220000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SA<n><es><n><bd><n><tz>-05<n><of>-0600<n><ot>-0500<n><s>19700905T220000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SA<n><ed><n>",
      "20230517T170335Z<n><bs><n><tz>IST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><es><n><bd><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><ed><n>",
      "20230517T170336Z<n><bs><n><tz>GMT<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+01<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+13<n><of>+1300<n><ot>+1300<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+14<n><of>+1400<n><ot>+1400<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+02<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>+04<n><of>+0400<n><ot>+0400<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-01<n><of>-0100<n><ot>-0100<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-10<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-11<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-12<n><of>-1200<n><ot>-1200<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-06<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-07<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-08<n><of>-0800<n><ot>-0800<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>-09<n><of>-0900<n><ot>-0900<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>UTC<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>BST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170336Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>EET<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>",
      "20230517T170336Z<n><bs><n><tz>MSK<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
      "20230517T170336Z<n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>",
      "20230517T170336Z<n><bs><n><tz>HST<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+12<n><of>+1200<n><ot>+1200<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>MEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>MET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>+1345<n><of>+1245<n><ot>+1345<n><s>19700927T024500<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>+1245<n><of>+1345<n><ot>+1245<n><s>19700405T034500<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+13<n><of>+1300<n><ot>+1300<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>-09<n><of>-0900<n><ot>-0900<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>ChST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>+14<n><of>+1400<n><ot>+1400<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>-0930<n><of>-0930<n><ot>-0930<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>SST<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>-11<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bd><n><tz>+12<n><of>+1100<n><ot>+1200<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>+11<n><of>+1200<n><ot>+1100<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>-08<n><of>-0800<n><ot>-0800<n><s>19700101T000000<n><es><n>",
      "20230517T170335Z<n><bs><n><tz>-10<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>",
    ]
  function N(t) {
    t = t.split("/")
    return (3 !== t.length ||
      (r["" + t[0]] &&
        r["" + t[0]]["" + t[1]] &&
        r["" + t[0]]["" + t[1]]["" + t[2]])) &&
      (2 !== t.length || (r["" + t[0]] && r["" + t[0]]["" + t[1]])) &&
      (1 !== t.length || r["" + t[0]])
      ? 3 === t.length
        ? [
            r["" + t[0]]["" + t[1]]["" + t[2]][0],
            a(e[r["" + t[0]]["" + t[1]]["" + t[2]][1]]),
          ]
        : 2 === t.length
        ? [r["" + t[0]]["" + t[1]][0], a(e[r["" + t[0]]["" + t[1]][1]])]
        : [r["" + t[0]][0], a(e[r["" + t[0]][1]])]
      : (console.error("Given timezone not valid."), "")
  }
  function a(t) {
    var e, a
    for ([e, a] of Object.entries({
      "<br>": "<n>",
      "TZNAME:": "<tz>",
      "TZOFFSETFROM:": "<of>",
      "TZOFFSETTO:": "<ot>",
      "DTSTART:": "<s>",
      "RRULE:": "<r>",
      "BEGIN:DAYLIGHT": "<bd>",
      "END:DAYLIGHT": "<ed>",
      "BEGIN:STANDARD": "<bs>",
      "END:STANDARD": "<es>",
    }))
      t = t.replaceAll(a, e)
    return t
  }
  function m(t, e, a) {
    t = N(t)
    if (null == t[1] || "" == t[1]) return ""
    if (!e.match(/^\d{4}-\d{2}-\d{2}$/))
      return (
        console.error(
          "offset calculation failed: date misspelled [-> YYYY-MM-DD]",
        ),
        ""
      )
    if (!a.match(/^\d{2}:\d{2}$/))
      return (
        console.error("offset calculation failed: time misspelled [-> hh:mm]"),
        ""
      )
    if (!t[1].match(/BEGIN:DAYLIGHT/i))
      return t[1].match(/TZOFFSETTO:([+|-]\d{4})/i)[1]
    ;(e = new Date(e + "T" + a + ":00")), (a = e.getFullYear())
    const o = e.getMonth() + 1
    var n,
      i,
      r = e.getDate(),
      e = e.getHours(),
      l = t[1].replace(/[^\w_\-:,;=+/<br>]/g, "").split("<br>")
    const c = { 1: {}, 2: {} }
    let d = 0
    for (let t = 0; t < l.length; t++)
      l["" + t].startsWith("TZOFFSETTO") &&
        (d++, (c["" + d].offset = l["" + t].split(":")[1])),
        l["" + t].startsWith("DTSTART") &&
          (c["" + d].hour = parseInt(l["" + t].substr(17, 2))),
        l["" + t].startsWith("RRULE") &&
          ((n = l["" + t].split(";")),
          (i = parseInt(n[1].split("=")[1])),
          (c["" + d].month = parseInt(i)),
          (c["" + d].day = n[2].split("=")[1]))
    if (
      (c[1].month > c[2].month && ([c[1], c[2]] = [c[2], c[1]]),
      o != c[1].month && o != c[2].month)
    )
      return (o < c[1].month || o > c[2].month ? c[2] : c[1]).offset
    const s = Object.keys(c).find((t) => c["" + t].month == o)
    var b = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
      u = new Date(a, o, 0).getDate()
    let m = new Date(a, o - 1, 1).getDay()
    const p = { SU: {}, MO: {}, TU: {}, WE: {}, TH: {}, FR: {}, SA: {} }
    for (let t = 1; t <= u; t++) {
      var g = Object.keys(p[b["" + m]]).length + 1
      ;(p[b["" + m]]["" + g] = t), 7 == ++m && (m = 0)
    }
    var h,
      a =
        "-" == c["" + s].day[0]
          ? ((h = c["" + s].day.substr(2, 2)),
            (t =
              Object.keys(p["" + h]).length + 1 - parseInt(c["" + s].day[1])),
            p["" + h]["" + t])
          : ((h = c["" + s].day.substr(1, 2)), p["" + h][c["" + s].day[0]])
    return (
      a < r || (r == a && e >= c["" + s].hour)
        ? c["" + s]
        : ((t = 1 == s ? 2 : 1), c["" + t])
    ).offset
  }
  let i = []
  /*!
   *  @preserve
   *
   *  ++++++++++++++++++++++
   *  Add to Calendar Button
   *  ++++++++++++++++++++++
   *
   *  Version: 2.4.1
   *  Creator: Jens Kuerschner (https://jenskuerschner.de)
   *  Project: https://github.com/add2cal/add-to-calendar-button
   *  License: Elastic License 2.0 (ELv2) (https://github.com/add2cal/add-to-calendar-button/blob/main/LICENSE.txt)
   *  Note:    DO NOT REMOVE THE COPYRIGHT NOTICE ABOVE!
   *
   */
  const H = "2.4.1",
    _ = {
      default:
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000;--btn-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 15%) 2px 2px 10px -3px;--btn-shadow-hover:rgba(0 0 0 / 35%) 2px 5px 18px -1px,rgba(0 0 0 / 30%) 2px 2px 10px -3px;--btn-shadow-active:rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 45%) 2px 2px 10px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--btn-shadow-active:rgba(255 255 255 / 7%) -12px -5px 23px -8px,rgba(255 255 255 / 8%) -7px -5px 18px -3px,rgba(0 0 0 / 70%) 2px 5px 19px -1px,rgba(0 0 0 / 60%) 3px 3px 22px -3px;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:6px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:.13em;max-width:350px;min-width:10em;padding:.65em 1em;position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text,.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover);color:var(--btn-text-hover)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover);margin:0;padding:.78em 1.13em}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:4px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;z-index:14000090}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000;max-width:max-content}.atcb-list{border-radius:0 0 6px 6px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 6px 6px}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.25em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:6px 6px 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:6px}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.25em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:6px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:6px 6px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 6px 6px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:6px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button.atcb-single:focus .atcb-checkmark,.atcb-button.atcb-single:hover .atcb-checkmark{top:-.77em;right:-.17em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
      "3d": ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000;--btn-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 15%) 2px 2px 10px -3px;--btn-shadow-hover:rgba(0 0 0 / 35%) 2px 5px 18px -1px,rgba(0 0 0 / 30%) 2px 2px 10px -3px;--btn-shadow-active:rgba(0 0 0 / 50%) 2px 10px 20px -2px,rgba(0 0 0 / 45%) 2px 4px 12px -3px;--btn-shadow-active-up:rgba(0 0 0 / 40%) 2px -8px 15px -2px,rgba(0 0 0 / 50%) 2px 4px 12px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--btn-shadow-active:rgba(255 255 255 / 7%) -12px -5px 23px -8px,rgba(255 255 255 / 8%) -7px -5px 18px -3px,rgba(0 0 0 / 70%) 2px 10px 20px -1px,rgba(0 0 0 / 60%) 3px 5px 25px -3px;--btn-shadow-active-up:rgba(255 255 255 / 7%) -12px 5px 23px -8px,rgba(255 255 255 / 8%) -7px 5px 18px -3px,rgba(0 0 0 / 60%) 2px -8px 15px -1px,rgba(0 0 0 / 60%) 3px 5px 25px -3px;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:6px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:0;max-width:350px;min-width:10em;padding:.65em 1em;position:relative;text-align:center;touch-action:manipulation;transform:translate3d(0,0,-12px);user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text,.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover);color:var(--btn-text-hover)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){background-color:var(--btn-background-hover);z-index:15000000}.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover);margin:-.13em;padding:.78em 1.13em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropup,.atcb-dropoverlay){box-shadow:var(--btn-shadow-active);transform:perspective(100px) rotateX(12deg) translate3d(0,0,2px);transition:transform .1s linear}.atcb-button.atcb-active.atcb-dropup:not(.atcb-modal-style,.atcb-dropoverlay){box-shadow:var(--btn-shadow-active-up);transform:perspective(100px) rotateX(348deg) translate3d(0,0,2px);transition:transform .1s linear}.atcb-button.atcb-active.atcb-dropoverlay{transform:translate3d(0,0,0);z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:6px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;transform:translate3d(0,0,0);z-index:14000090}.atcb-list{background-color:var(--list-background);border-radius:0 0 6px 6px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-wrapper.atcb-dropdown:not(.atcb-dropup,.atcb-dropoverlay){animation:atcb-list-slide-down .4s ease 50ms 1 normal both;opacity:0}.atcb-list-wrapper.atcb-dropup:not(.atcb-dropoverlay){animation:atcb-list-slide-up .4s ease 50ms 1 normal both;opacity:0}.atcb-list-wrapper.atcb-dropoverlay{transform:translate3d(0,0,2px);z-index:15000000;animation:atcb-list-slide-center .3s ease 0s 1 normal both;opacity:0}@keyframes atcb-list-slide-down{0%{opacity:0;transform:rotateX(70deg);transform-origin:top}100%{opacity:1;transform:rotateX(0);transform-origin:top}}@keyframes atcb-list-slide-up{0%{opacity:0;transform:rotateX(70deg);transform-origin:bottom}100%{opacity:1;transform:rotateX(0);transform-origin:bottom}}@keyframes atcb-list-slide-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 6px 6px}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.5em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:6px 6px 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:6px}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.5em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:6px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:6px 6px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 6px 6px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:6px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
      flat: ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#545454;--btn-shadow:#333;--btn-text:#333;--btn-text-hover:#000;--list-background:#f5f5f5;--list-background-hover:#fff;--list-border:#545454;--list-text:#333;--list-text-hover:#000;--list-close-background:#545454;--list-close-text:#b0b0b0;--list-close-text-hover:#777;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#bababa;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#676767;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#414141;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 40%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#222;--btn-background-hover:#373737;--btn-border:#515151;--btn-shadow:#000;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--list-background:#222;--list-background-hover:#373737;--list-border:#515151;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#111;--list-close-text:#777;--list-close-text-hover:#f1f1f1;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#313131;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#414141;--date-btn-cal-background:#c7c7cd;--date-btn-background:#2d2d2d;--date-btn-background-hover:#474747;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 75%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:.2em solid var(--btn-border);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:0;max-width:350px;min-width:10em;padding:.8em 1.2em;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow);position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text,.atcb-button:disabled{min-width:0}.atcb-button.atcb-click:not([disabled]){top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow);color:var(--btn-text-hover)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-background-hover);top:-5px;left:-5px;box-shadow:5px 5px 0 0 var(--btn-shadow);color:var(--btn-text-hover)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-right:1em;line-height:1em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:1em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-icon-trigger svg{display:none}.atcb-button .atcb-icon-trigger::after{content:\"+\";font-size:1.5em}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:0;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 2px 0 6px;position:absolute;z-index:16000090}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(150px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-150px)}100%{opacity:1;transform:translateY(0)}}.atcb-list{background:var(--list-close-background);box-sizing:border-box;border:.15em solid var(--list-border);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-dropup .atcb-list-item:last-child{border-bottom-width:0}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{border-top-width:0}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{border-top-width:.15em}.atcb-list-item .atcb-icon{margin-bottom:.1em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item.atcb-list-item-close:hover{color:var(--list-close-text-hover)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{border:.15em solid var(--btn-border);background-color:var(--modal-background);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{padding-top:0}.atcb-modal-content{font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;padding-top:0}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{border:.2em solid var(--btn-border);background-color:var(--modal-btn-secondary-background);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow)}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);color:var(--modal-btn-text-hover);text-decoration:none;top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{border:.15em solid var(--btn-border);display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;background-color:var(--date-btn-background);padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow)}.atcb-subevent-btn:hover{align-items:center;top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
      round:
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000;--btn-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 15%) 2px 2px 10px -3px;--btn-shadow-hover:rgba(0 0 0 / 35%) 2px 5px 18px -1px,rgba(0 0 0 / 30%) 2px 2px 10px -3px;--btn-shadow-active:rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 45%) 2px 2px 10px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--btn-shadow-active:rgba(255 255 255 / 7%) -12px -5px 23px -8px,rgba(255 255 255 / 8%) -7px -5px 18px -3px,rgba(0 0 0 / 70%) 2px 5px 19px -1px,rgba(0 0 0 / 60%) 3px 3px 22px -3px;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:500px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:.13em;max-width:350px;min-width:10em;padding:.65em 1.3em;position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text{min-width:0;border-radius:100%;display:flex;align-content:center;justify-content:center;align-items:center;height:3em;width:3em;padding:0}.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover);color:var(--btn-text-hover);margin:0;padding:.78em 1.43em}.atcb-button.atcb-no-text:focus,.atcb-button.atcb-no-text:hover{height:3.26em;width:3.26em;padding:0}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-no-text),.atcb-button.atcb-single:not(.atcb-no-text,[disabled]):focus,.atcb-button.atcb-single:not(.atcb-no-text,[disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover);margin:0;padding:.78em 1.43em}.atcb-button.atcb-active.atcb-no-text:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single.atcb-no-text:not([disabled]):focus,.atcb-button.atcb-single.atcb-no-text:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover);margin:0;padding:.93em 1.43em}.atcb-button.atcb-dropup::after,.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup,.atcb-no-text)::before{content:\"\";width:0;height:0;position:absolute;left:0;right:0;margin:0 auto;transition:border-width .1s linear .1s}.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup,.atcb-no-text)::before{top:100%;border:0 solid transparent;border-bottom:none;border-top-color:var(--btn-background-hover)}.atcb-button.atcb-dropup::after{bottom:100%;border:0 solid transparent;border-top:none;border-bottom-color:var(--btn-background-hover)}.atcb-button.atcb-active.atcb-dropup::after,.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup,.atcb-no-text)::before{border-width:.35em}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:-15px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;position:absolute;z-index:14000090;min-width:12.5em;width:auto}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{animation:list-entrance-center .2s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list{border-radius:11px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 11px 11px}.atcb-list-item:first-child{border-radius:11px 11px 0 0}.atcb-list-item:only-child{border-radius:11px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:9px 9px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:9px 9px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 9px 9px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:500px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button:focus .atcb-checkmark,.atcb-button:hover .atcb-checkmark{top:-.77em;right:-.17em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
      neumorphism:
        ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-text:#444;--btn-text-hover:#111;--btn-shadow:rgba(40 40 40 / 30%) 0.3em 0.3em 0.6em,rgba(255 255 255 / 70%) -0.1em -0.1em 0.3em;--btn-shadow-hover:rgba(40 40 40 / 50%) 0.4em 0.4em 0.8em,rgba(255 255 255 / 90%) -0.2em -0.2em 0.5em;--btn-shadow-active:inset rgba(40 40 40 / 40%) 0.15em 0.15em 0.3em,inset rgba(255 255 255 / 90%) -0.2em -0.2em 0.5em;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#444;--list-text-hover:#111;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(40 40 40 / 30%) 0.4em 0.4em 0.8em,rgba(255 255 255 / 80%) -0.2em -0.2em 0.5em;--modal-text:#111;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#222;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(40 40 40 / 15%) 0.2em 0.2em 0.4em,rgba(255 255 255 / 30%) -0.1em -0.1em 0.3em;--modal-shadow-btn-hover:rgba(40 40 40 / 40%) 0.4em 0.4em 0.7em,rgba(255 255 255 / 70%) -0.2em -0.2em 0.5em;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#e3e5ea;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(40 40 40 / 40%) 0.2em 0.2em 0.8em,rgba(255 255 255 / 80%) -0.2em -0.2em 0.4em;--date-btn-shadow-hover:rgba(40 40 40 / 50%) 0.3em 0.4em 1em,rgba(255 255 255) -0.3em -0.3em 0.7em;--checkmark-background:radial-gradient(circle, #fff 0, rgba(255 255 255 / 80%) 40%, rgba(255 255 255 / 0%) 70%);--overlay-background:#dcdcdc;--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(0 0 0 / 70%) 0.3em 0.3em 0.6em,rgba(230 230 230 / 30%) -0.05em -0.05em 0.4em;--btn-shadow-hover:rgba(0 0 0 / 80%) 0.4em 0.4em 0.9em,rgba(230 230 230 / 35%) -0.08em -0.08em 0.5em;--btn-shadow-active:inset rgba(0 0 0 / 80%) 0.15em 0.15em 0.25em,inset rgba(230 230 230 / 15%) -0.2em -0.2em 0.6em;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(0 0 0) 0.3em 0.3em 1em,rgba(230 230 230 / 40%) -0.08em -0.08em 0.6em;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 35px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(0 0 0 / 60%) 0.2em 0.2em 0.6em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.4em;--modal-shadow-btn-hover:rgba(0 0 0 / 80%) 0.3em 0.3em 0.8em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.6em;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(0 0 0 / 70%) 0.2em 0.2em 0.8em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.5em;--date-btn-shadow-hover:rgba(0 0 0) 0.3em 0.4em 1em,rgba(230 230 230 / 15%) -0.2em -0.2em 0.8em;--checkmark-background:radial-gradient(circle, rgba(0 0 0 / 50%) 0, rgba(0 0 0 / 30%) 40%, rgba(0 0 0 / 0%) 70%);--overlay-background:#141414;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:0;border-radius:15px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:0;max-width:350px;min-width:10em;padding:1em 1.2em;position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;transition:box-shadow .1s ease-in-out,background-color .1s ease-in-out;z-index:1}.atcb-button.atcb-no-text{min-width:0;border-radius:100%;display:flex;align-content:center;justify-content:center;align-items:center;height:3em;width:3em;padding:0}.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover);color:var(--btn-text-hover)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:-30px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;position:absolute;min-width:12.5em;width:auto;animation:list-entrance .6s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance{0%{opacity:0}100%{opacity:1}}.atcb-list{border-radius:11px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{box-shadow:none;align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:1em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:box-shadow .15s ease-in-out,padding .15s ease-in-out,margin .15s ease-in-out}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{box-shadow:var(--btn-shadow);background-color:var(--list-background-hover);color:var(--list-text-hover);padding:1.2em;margin:-.2em;position:relative;z-index:15000010}.atcb-list-item:focus-visible{box-shadow:var(--btn-shadow);background-color:var(--list-background-hover);color:var(--keyboard-focus);padding:1.2em;margin:-.2em;position:relative;z-index:15000010;font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 11px 11px}.atcb-list-item:first-child{border-radius:11px 11px 0 0}.atcb-list-item:only-child{border-radius:11px}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{animation:list-entrance .6s ease 0s 1 normal forwards;filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:9px 9px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 9px 9px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:13px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button.atcb-single:focus .atcb-checkmark,.atcb-button.atcb-single:hover .atcb-checkmark{top:-.77em;right:-.17em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
      text: ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-underline:#a9ceff;--btn-border:#a8a8a8;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-text:#333;--btn-text-hover:#000;--btn-text-shadow:#fff;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,rgba(255 255 255 / 80%)  0,rgba(255 255 255 / 60%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(200 200 200 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-underline:#336db9;--btn-border:#888;--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-text:#dedede;--btn-text-hover:#fff;--btn-text-shadow:#000;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#fff;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 40%) 0,rgba(0 0 0 / 20%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{background-image:linear-gradient(120deg,var(--btn-underline) 0,var(--btn-underline) 100%);background-repeat:no-repeat;background-size:100% 10%;background-position:0 100%;background-color:transparent;border:0;border-radius:0;transition:background-size .1s ease-in,border-radius .2s ease-in;align-items:center;color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.2em;margin:0 .2em;padding:.75em;position:relative;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text,.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-size:100% 100%;color:var(--btn-text-hover);text-shadow:0 0 .7em var(--btn-text-shadow);border-radius:21px}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-size:100% 10%;border-radius:3px 3px 11px 11px;background-position:0 0;background-color:var(--btn-background);color:var(--btn-text);text-shadow:none}.atcb-button.atcb-active.atcb-dropup{background-position:0 100%;border-radius:11px 11px 3px 3px}.atcb-button.atcb-dropup::after,.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{content:\"\";width:0;height:0;position:absolute;left:0;right:0;margin:0 auto;transition:border-width .1s linear .1s}.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{top:100%;border:0 solid transparent;border-bottom:none;border-top-color:var(--btn-background)}.atcb-button.atcb-dropup::after{bottom:100%;border:0 solid transparent;border-top:none;border-bottom-color:var(--btn-background)}.atcb-button.atcb-active.atcb-dropup::after,.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{border-width:.35em}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-right:1em;line-height:1em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:1em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-icon-trigger svg{display:none}.atcb-button .atcb-icon-trigger::after{content:\"+\";font-size:1.5em}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:-15px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;position:absolute;z-index:14000090;min-width:12.5em;width:auto}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{animation:list-entrance-center .2s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list{border-radius:11px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em 1em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 11px 11px}.atcb-list-item:first-child{border-radius:11px 11px 0 0}.atcb-list-item:only-child{border-radius:11px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.1em;margin-right:.7em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.7em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:9px 9px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:9px 9px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 9px 9px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:21px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:var(--btn-text)}.atcb-icon .atcb-icon-ical svg{fill:var(--btn-text)}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
      date: ":host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000;--btn-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 15%) 2px 2px 10px -3px;--btn-shadow-hover:rgba(0 0 0 / 30%) 2px 5px 18px -1px,rgba(0 0 0 / 25%) 2px 2px 10px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E\") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#474747;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--list-background:#2e2e2e;--list-background-hover:#474747;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button,.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-button{box-shadow:var(--btn-shadow);min-width:17.5em;max-width:16em;position:relative;z-index:1}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:hover,.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-button:focus,.atcb-button:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover)}.atcb-button:focus-visible,.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-button:hover .atcb-date-btn-left,.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-button:disabled .atcb-date-btn-hover{letter-spacing:.1em}.atcb-button:hover .atcb-date-btn-details,.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-button:hover .atcb-date-btn-hover,.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:4px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;z-index:14000090}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000}.atcb-list{border-radius:0 0 6px 6px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 6px 6px}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.25em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:6px 6px 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:6px}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.25em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:6px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:6px 6px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 6px 6px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:6px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}",
    },
    l = () => "undefined" != typeof window,
    A = l()
      ? () =>
          !!(
            (/iPad|iPhone|iPod/i.test(
              navigator.userAgent || navigator.vendor || window.opera,
            ) &&
              !window.MSStream) ||
            ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints)
          )
      : () => !1,
    E = l()
      ? () =>
          !(
            !/android/i.test(
              navigator.userAgent || navigator.vendor || window.opera,
            ) || window.MSStream
          )
      : () => !1,
    p = l()
      ? () =>
          !!/^((?!chrome|android|crios|fxios).)*safari/i.test(
            navigator.userAgent || navigator.vendor,
          )
      : () => !1,
    Y = () => !(!E() && !A()),
    g = l()
      ? () =>
          !!/(; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(
            navigator.userAgent || navigator.vendor,
          )
      : () => !1,
    Z = l()
      ? () =>
          !!/(Instagram)/i.test(
            navigator.userAgent || navigator.vendor || window.opera,
          )
      : () => !1,
    F = g() ? "_system" : "_blank",
    I = ["apple", "google", "ical", "ms365", "outlookcom", "msteams", "yahoo"],
    j = ["apple", "google", "ical"],
    q = ["msteams"],
    P = ["ical"],
    S = [],
    G = [
      "debug",
      "cspnonce",
      "name",
      "dates",
      "description",
      "startDate",
      "startTime",
      "endDate",
      "endTime",
      "timeZone",
      "location",
      "status",
      "sequence",
      "uid",
      "organizer",
      "attendee",
      "icsFile",
      "images",
      "recurrence",
      "recurrence_interval",
      "recurrence_until",
      "recurrence_count",
      "recurrence_byDay",
      "recurrence_byMonth",
      "recurrence_byMonthDay",
      "recurrence_weekstart",
      "availability",
      "created",
      "updated",
      "subscribe",
      "options",
      "iCalFileName",
      "listStyle",
      "buttonStyle",
      "trigger",
      "hideIconButton",
      "hideIconList",
      "hideIconModal",
      "hideTextLabelButton",
      "hideTextLabelList",
      "buttonsList",
      "hideBackground",
      "hideCheckmark",
      "hideBranding",
      "size",
      "label",
      "ty",
      "rsvp",
      "inline",
      "inlineRsvp",
      "customLabels",
      "customCss",
      "lightMode",
      "language",
      "hideRichData",
      "bypassWebViewCheck",
      "blockInteraction",
      "styleLight",
      "styleDark",
      "disabled",
      "hidden",
      "hideButton",
      "pastDateHandling",
      "proxy",
      "fakeMobile",
      "fakeIOS",
      "fakeAndroid",
      "forceOverlay",
    ],
    K = [
      "debug",
      "hideIconButton",
      "hideIconList",
      "hideIconModal",
      "hideTextLabelButton",
      "hideTextLabelList",
      "subscribe",
      "hideBackground",
      "hideCheckmark",
      "hideBranding",
      "inlineRsvp",
      "hideRichData",
      "buttonsList",
      "inline",
      "bypassWebViewCheck",
      "blockInteraction",
      "disabled",
      "hidden",
      "hideButton",
      "proxy",
      "fakeMobile",
      "fakeIOS",
      "fakeAndroid",
      "forceOverlay",
    ],
    Q = ["customLabels", "ty", "rsvp"],
    V = ["dates"],
    W = ["images", "options"],
    f = {
      trigger:
        '<span class="atcb-icon-trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-5.941 123.747c2.979 0 5.404 2.425 5.404 5.404s-2.425 5.404-5.404 5.404l-21.077-.065-.065 21.045c0 2.979-2.425 5.404-5.404 5.404s-5.404-2.425-5.404-5.404l.065-21.061-21.045-.081c-2.979 0-5.404-2.425-5.404-5.404s2.425-5.404 5.404-5.404l21.061.065.065-21.045c0-2.979 2.425-5.404 5.404-5.404s5.404 2.425 5.404 5.404l-.065 21.077 21.061.065zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.167V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.171c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.988 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
      apple:
        '<span class="atcb-icon-apple"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M167.084 130.514c-.308-31.099 25.364-46.022 26.511-46.761-14.429-21.107-36.91-24.008-44.921-24.335-19.13-1.931-37.323 11.27-47.042 11.27-9.692 0-24.67-10.98-40.532-10.689-20.849.308-40.07 12.126-50.818 30.799-21.661 37.581-5.54 93.281 15.572 123.754 10.313 14.923 22.612 31.688 38.764 31.089 15.549-.612 21.433-10.073 40.242-10.073s24.086 10.073 40.546 9.751c16.737-.308 27.34-15.214 37.585-30.187 11.855-17.318 16.714-34.064 17.009-34.925-.372-.168-32.635-12.525-32.962-49.68l.045-.013zm-30.917-91.287C144.735 28.832 150.524 14.402 148.942 0c-12.344.503-27.313 8.228-36.176 18.609-7.956 9.216-14.906 23.904-13.047 38.011 13.786 1.075 27.862-7.004 36.434-17.376z"/></svg></span>',
      google:
        '<span class="atcb-icon-google"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M152.637 47.363H47.363v105.273h105.273z" fill="#fff"/><path d="M152.637 200L200 152.637h-47.363z" fill="#f72a25"/><path d="M200 47.363h-47.363v105.273H200z" fill="#fbbc04"/><path d="M152.637 152.637H47.363V200h105.273z" fill="#34a853"/><path d="M0 152.637v31.576A15.788 15.788 0 0 0 15.788 200h31.576v-47.363z" fill="#188038"/><path d="M200 47.363V15.788A15.79 15.79 0 0 0 184.212 0h-31.575v47.363z" fill="#1967d2"/><path d="M15.788 0A15.79 15.79 0 0 0 0 15.788v136.849h47.363V47.363h105.274V0z" fill="#4285f4"/><path d="M68.962 129.02c-3.939-2.653-6.657-6.543-8.138-11.67l9.131-3.76c.83 3.158 2.279 5.599 4.346 7.341 2.051 1.742 4.557 2.588 7.471 2.588 2.995 0 5.55-.911 7.699-2.718 2.148-1.823 3.223-4.134 3.223-6.934 0-2.865-1.139-5.208-3.402-7.031s-5.111-2.718-8.496-2.718h-5.273v-9.033h4.736c2.913 0 5.387-.781 7.389-2.376 2.002-1.579 2.995-3.743 2.995-6.494 0-2.441-.895-4.395-2.686-5.859s-4.053-2.197-6.803-2.197c-2.686 0-4.818.716-6.396 2.148s-2.767 3.255-3.451 5.273l-9.033-3.76c1.204-3.402 3.402-6.396 6.624-8.984s7.34-3.89 12.337-3.89c3.695 0 7.031.716 9.977 2.148s5.257 3.418 6.934 5.941c1.676 2.539 2.507 5.387 2.507 8.545 0 3.223-.781 5.941-2.327 8.187-1.546 2.23-3.467 3.955-5.729 5.143v.537a17.39 17.39 0 0 1 7.34 5.729c1.904 2.572 2.865 5.632 2.865 9.212s-.911 6.771-2.718 9.57c-1.823 2.799-4.329 5.013-7.52 6.624s-6.787 2.425-10.775 2.425c-4.622 0-8.887-1.318-12.826-3.988zm56.087-45.312l-10.026 7.243-5.013-7.601 17.985-12.972h6.901v61.198h-9.847z" fill="#1a73e8"/></svg></span>',
      ical: '<span class="atcb-icon-ical"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-25.228 161.263c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm-81.803-59.766c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 139.079c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 168.962c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.15V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.155c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.971 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
      msteams:
        '<span class="atcb-icon-msteams"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 186.047"><path d="M195.349 39.535a20.93 20.93 0 1 1-41.86 0 20.93 20.93 0 1 1 41.86 0zm-55.847 30.233h51.66A8.84 8.84 0 0 1 200 78.605v47.056c0 17.938-14.541 32.479-32.479 32.479h0-.154c-17.938.003-32.481-14.537-32.484-32.474v-.005-51.274a4.62 4.62 0 0 1 4.619-4.619z" fill="#5059c9"/><path d="M149.614 69.767H64.34c-4.823.119-8.637 4.122-8.526 8.944v53.67c-.673 28.941 22.223 52.957 51.163 53.665 28.94-.708 51.836-24.725 51.163-53.665v-53.67c.112-4.823-3.703-8.825-8.526-8.944zm-10.079-39.535a30.233 30.233 0 0 1-60.465 0 30.233 30.233 0 0 1 60.465 0z" fill="#7b83eb"/><path opacity=".1" d="M111.628 69.767v75.209c-.023 3.449-2.113 6.547-5.302 7.86-1.015.43-2.107.651-3.209.651H59.907l-1.628-4.651c-1.628-5.337-2.459-10.885-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M106.977 69.767v79.86a8.241 8.241 0 0 1-.651 3.209c-1.313 3.189-4.412 5.279-7.86 5.302H62.093l-2.186-4.651a46.13 46.13 0 0 1-1.628-4.651 56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M102.326 69.767v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".1" d="M111.628 45.721v14.651l-2.326.093c-.791 0-1.535-.046-2.326-.093-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767 25.845 25.845 0 0 1-1.488-4.651h23.209c4.693.018 8.494 3.818 8.512 8.512z"/><use xlink:href="#B" opacity=".2" transform="scale(.08973306)"/><path d="M106.977 50.372v10c-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767h17.07c4.693.018 8.494 3.818 8.512 8.512zm0 19.395v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z" opacity=".2"/><path opacity=".2" d="M102.326 50.372v9.256a30.233 30.233 0 0 1-20.93-17.767h12.419c4.693.018 8.494 3.818 8.512 8.512z"/><linearGradient id="A" gradientUnits="userSpaceOnUse" x1="17.776" y1="35.199" x2="84.55" y2="150.848"><stop offset="0" stop-color="#5a62c3"/><stop offset=".5" stop-color="#4d55bd"/><stop offset="1" stop-color="#3940ab"/></linearGradient><path fill="url(#A)" d="M8.526 41.86H93.8a8.53 8.53 0 0 1 8.526 8.526v85.274a8.53 8.53 0 0 1-8.526 8.526H8.526A8.53 8.53 0 0 1 0 135.66V50.386a8.53 8.53 0 0 1 8.526-8.526z"/><path fill="#fff" d="M73.6 74.316H56.553v46.419h-10.86V74.316H28.726v-9.005H73.6z"/><defs><path id="B" d="M1192.167 561.355v111.442c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z"/></defs></svg></span>',
      ms365:
        '<span class="atcb-icon-ms365"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 239.766"><path d="M200 219.785l-.021-.012V20.591L128.615 0 .322 48.172 0 48.234.016 192.257l43.78-17.134V57.943l84.819-20.279-.012 172.285L.088 192.257l128.515 47.456v.053l71.376-19.753v-.227z"/></svg></span>',
      outlookcom:
        '<span class="atcb-icon-outlookcom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 175"><path d="M178.725 0H71.275A8.775 8.775 0 0 0 62.5 8.775v9.975l60.563 18.75L187.5 18.75V8.775A8.775 8.775 0 0 0 178.725 0z" fill="#0364b8"/><path d="M197.813 96.281c.915-2.878 2.187-5.855 2.187-8.781-.002-1.485-.795-2.857-1.491-3.26l-68.434-38.99a9.37 9.37 0 0 0-9.244-.519c-.312.154-.614.325-.906.512l-67.737 38.6-.025.013-.075.044a4.16 4.16 0 0 0-2.088 3.6c.541 2.971 1.272 5.904 2.188 8.781l71.825 52.532z" fill="#0a2767"/><path d="M150 18.75h-43.75L93.619 37.5l12.631 18.75L150 93.75h37.5v-37.5z" fill="#28a8ea"/><path d="M150 18.75h37.5v37.5H150z" fill="#50d9ff"/><path d="M150 93.75l-43.75-37.5H62.5v37.5l43.75 37.5 67.7 11.05z" fill="#0364b8"/><path d="M106.25 56.25v37.5H150v-37.5zM150 93.75v37.5h37.5v-37.5zm-87.5-75h43.75v37.5H62.5z" fill="#0078d4"/><path d="M62.5 93.75h43.75v37.5H62.5z" fill="#064a8c"/><path d="M126.188 145.113l-73.706-53.75 3.094-5.438 68.181 38.825a3.3 3.3 0 0 0 2.625-.075l68.331-38.937 3.1 5.431z" fill="#0a2767" opacity=".5"/><path d="M197.919 91.106l-.088.05-.019.013-67.738 38.588c-2.736 1.764-6.192 1.979-9.125.569l23.588 31.631 51.588 11.257v-.001c2.434-1.761 3.876-4.583 3.875-7.587V87.5c.001 1.488-.793 2.862-2.081 3.606z" fill="#1490df"/><path d="M200 165.625v-4.613l-62.394-35.55-7.531 4.294a9.356 9.356 0 0 1-9.125.569l23.588 31.631 51.588 11.231v.025a9.362 9.362 0 0 0 3.875-7.588z" opacity=".05"/><path d="M199.688 168.019l-68.394-38.956-1.219.688c-2.734 1.766-6.19 1.984-9.125.575l23.588 31.631 51.587 11.256v.001a9.38 9.38 0 0 0 3.562-5.187z" opacity=".1"/><path d="M51.455 90.721c-.733-.467-1.468-1.795-1.455-3.221v78.125c-.007 5.181 4.194 9.382 9.375 9.375h131.25c1.395-.015 2.614-.366 3.813-.813.638-.258 1.252-.652 1.687-.974z" fill="#28a8ea"/><path d="M112.5 141.669V39.581a8.356 8.356 0 0 0-8.331-8.331H62.687v46.6l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031V150h54.169a8.356 8.356 0 0 0 8.331-8.331z" opacity=".1"/><path d="M106.25 147.919V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 68.75h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M106.25 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M100 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h41.669a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M8.331 37.5h83.337A8.331 8.331 0 0 1 100 45.831v83.338a8.331 8.331 0 0 1-8.331 8.331H8.331A8.331 8.331 0 0 1 0 129.169V45.831A8.331 8.331 0 0 1 8.331 37.5z" fill="#0078d4"/><path d="M24.169 71.675a26.131 26.131 0 0 1 10.263-11.337 31.031 31.031 0 0 1 16.313-4.087 28.856 28.856 0 0 1 15.081 3.875 25.875 25.875 0 0 1 9.988 10.831 34.981 34.981 0 0 1 3.5 15.938 36.881 36.881 0 0 1-3.606 16.662 26.494 26.494 0 0 1-10.281 11.213 30 30 0 0 1-15.656 3.981 29.556 29.556 0 0 1-15.425-3.919 26.275 26.275 0 0 1-10.112-10.85 34.119 34.119 0 0 1-3.544-15.744 37.844 37.844 0 0 1 3.481-16.563zm10.938 26.613a16.975 16.975 0 0 0 5.769 7.463 15.069 15.069 0 0 0 9.019 2.719 15.831 15.831 0 0 0 9.631-2.806 16.269 16.269 0 0 0 5.606-7.481 28.913 28.913 0 0 0 1.787-10.406 31.644 31.644 0 0 0-1.687-10.538 16.681 16.681 0 0 0-5.413-7.75 14.919 14.919 0 0 0-9.544-2.956 15.581 15.581 0 0 0-9.231 2.744 17.131 17.131 0 0 0-5.9 7.519 29.85 29.85 0 0 0-.044 21.5z" fill="#fff"/></svg></span>',
      yahoo:
        '<span class="atcb-icon-yahoo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 177.803"><path d="M0 43.284h38.144l22.211 56.822 22.5-56.822h37.135L64.071 177.803H26.694l15.308-35.645L.001 43.284zm163.235 45.403H121.64L158.558 0 200 .002zm-30.699 8.488c12.762 0 23.108 10.346 23.108 23.106s-10.345 23.106-23.108 23.106a23.11 23.11 0 0 1-23.104-23.106 23.11 23.11 0 0 1 23.104-23.106z"/></svg></span>',
      atcb: '<svg version="1.1" viewBox="0 0 150 8.5002" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="matrix(1.3333 0 0 -1.3333 -2427.5 1757.9)"><g transform="matrix(.22189 0 0 -.22189 1822.6 1374.6)" fill="#777" style="paint-order:stroke markers fill;shape-inside:url(#rect2441);white-space:pre" aria-label="Add-to-Calendar-PRO.com"><path d="m-1.2773 253.99h12.148l7.9688 27.5h-9.4141l-1.0547-5.2734h-7.1094l-1.1328 5.2734h-9.0234zm8.7109 17.305-2.6172-12.031-2.6953 12.031z" style="paint-order:stroke markers fill"/><path d="m29.66 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m57.551 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m76.496 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m104.8 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89844-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398l0.03906-7.3828h-2.5391v-4.9609h3.1641l3.7109-7.5781h4.0625v7.5781h4.6094v4.9609h-4.6094v6.7969q0 1.0547 0.68359 1.582t1.8555 0.52734q0.91797 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m114.62 271.45q0 1.0938 0.3125 1.9141 0.33204 0.82031 0.85938 1.3672 0.52734 0.54687 1.2109 0.82031 0.68359 0.27344 1.3867 0.27344 0.70312 0 1.3672-0.27344 0.6836-0.27344 1.2109-0.82031 0.54688-0.54688 0.85938-1.3672 0.33203-0.82031 0.33203-1.9141t-0.33203-1.9141q-0.3125-0.82031-0.85938-1.3476-0.52734-0.54688-1.2109-0.82032-0.66406-0.27343-1.3672-0.27343-0.70313 0-1.3867 0.27343-0.6836 0.27344-1.2109 0.82032-0.52734 0.52734-0.85938 1.3476-0.3125 0.82032-0.3125 1.9141zm-7.8125 0q0.0977-2.5195 1.0352-4.4336 0.95703-1.9141 2.5195-3.2226 1.5625-1.3086 3.6133-1.9727 2.0703-0.66406 4.3945-0.66406 2.5391 0 4.6484 0.76172 2.1094 0.76171 3.6328 2.1289 1.5234 1.3477 2.3633 3.2422 0.83985 1.8945 0.83985 4.1602 0 1.8359-0.48828 3.3203-0.46875 1.4844-1.2891 2.6367-0.82031 1.1328-1.9336 1.9726-1.1133 0.83985-2.4023 1.3867-1.2891 0.52735-2.6758 0.78125-1.3672 0.25391-2.7344 0.25391-2.5781 0-4.707-0.74219-2.1094-0.76172-3.6328-2.1289-1.5234-1.3672-2.3633-3.2617-0.82032-1.9141-0.82032-4.2188z" style="paint-order:stroke markers fill"/><path d="m132.73 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m162.41 274.89q0.6836 0 1.2695-0.0586 0.58594-0.0781 1.1524-0.21484 0.58593-0.13672 1.1914-0.35156 0.60547-0.21485 1.3477-0.50782l1.0938 6.3477q-3.4766 2.0117-7.5781 2.0117-5.8008 0-9.9414-3.9062-4.3359-4.0625-4.3945-10.488 0-3.125 1.0742-5.7617 1.0742-2.6367 2.9688-4.5312 1.8945-1.9141 4.4726-2.9688 2.5781-1.0742 5.5859-1.0742 4.2773 0 7.7734 1.9922l-1.0547 6.2109q-2.8711-1.0938-5.1953-1.0938-3.2617 0-4.9609 1.8945-1.6797 1.875-1.6797 5.293 0 1.6992 0.44922 3.0469 0.46875 1.3281 1.3477 2.2656 0.8789 0.91797 2.1484 1.4062 1.2891 0.48829 2.9297 0.48829z" style="paint-order:stroke markers fill"/><path d="m186.52 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7774-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82031-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7773-0.76172 3.7109-0.76172 0.9961 0 1.9531 0.27343 0.97656 0.25391 1.8359 0.83985 0.8789 0.5664 1.582 1.4453 0.72265 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70313-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.2695 0.85938-0.52735 0.52734-0.83985 1.25t-0.3125 1.543q0 0.85937 0.33204 1.6016 0.33203 0.72266 0.8789 1.25 0.56641 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70312-0.3125 1.2305-0.83984 0.52734-0.52734 0.83984-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m212.02 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89843-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398v-18.672l8.4375-1.25v19.336q0 1.0742 0.68359 1.6016 0.68359 0.50781 1.8555 0.50781 0.89844 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m225.71 276.2q2.7344 0 5.8984-1.4062l0.97656 5.3711q-3.6328 1.6406-8.1641 1.6406-2.5195 0-4.6094-0.76172-2.0703-0.78125-3.5742-2.1484-1.4844-1.3867-2.3242-3.2812-0.82031-1.8945-0.82031-4.1211 0-2.3438 0.85937-4.2383 0.87891-1.9141 2.3828-3.2617 1.5039-1.3672 3.5156-2.0898 2.0117-0.74218 4.2969-0.74218 2.3047 0 4.043 0.78125 1.7383 0.76172 2.8906 2.1094 1.1719 1.3281 1.7383 3.125 0.58594 1.7774 0.58594 3.8086 0 0.27343-0.0195 0.52734t-0.0586 0.48828l-11.992 1.5625q0.46875 1.4062 1.5625 2.0312 1.0938 0.60547 2.8125 0.60547zm1.4844-7.6758q-0.6836-2.5-3.0469-2.5-0.74218 0-1.3281 0.29297t-0.9961 0.82031q-0.39062 0.50781-0.60546 1.2305-0.21485 0.70312-0.23438 1.5234z" style="paint-order:stroke markers fill"/><path d="m236.3 261.75h8.0469v4.082q1.1719-2.3633 3.0078-3.5156 1.8555-1.1523 4.3359-1.1523 1.9922 0 3.5156 0.74218 1.5234 0.74219 2.5586 2.1094 1.0547 1.3477 1.582 3.2617 0.54687 1.8945 0.54687 4.2188v10h-8.3984v-10.82q0-0.78125-0.15625-1.4453-0.13672-0.66406-0.46875-1.1328-0.3125-0.48828-0.80078-0.74219-0.48828-0.27343-1.1914-0.27343-0.85938 0-1.582 0.42968-0.72265 0.41016-1.2695 1.0156-0.52734 0.60547-0.85937 1.2695-0.33203 0.64453-0.42969 1.1133v10.586h-8.4375z" style="paint-order:stroke markers fill"/><path d="m272.59 261.16q2.2656 0 3.9062 0.9375 1.6406 0.9375 2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3476-1.3867 3.1055-2.168 1.7774-0.80078 3.7305-0.80078zm6.5625 10.176q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52735 0.54687-0.83985 1.2695-0.29296 0.72266-0.29296 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.8789 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203t1.25-0.8789q0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m307.06 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7773-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82032-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7774-0.76172 3.7109-0.76172 0.99609 0 1.9531 0.27343 0.97657 0.25391 1.8359 0.83985 0.87891 0.5664 1.582 1.4453 0.72266 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33204-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72265 0.3125-1.2695 0.85938-0.52734 0.52734-0.83984 1.25t-0.3125 1.543q0 0.85937 0.33203 1.6016 0.33203 0.72266 0.87891 1.25 0.5664 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70313-0.3125 1.2305-0.83984 0.52735-0.52734 0.83985-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m319.5 261.75h8.4375v4.082q0.95703-2.4219 2.5391-3.5352 1.6016-1.1328 3.6719-1.1328l1.1719 6.543q-3.8086 0-5.6055 0.82031-1.7773 0.80078-1.7773 2.5781v10.391h-8.4375z" style="paint-order:stroke markers fill"/><path d="m337.22 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m352.43 253.99h9.9219q3.0859 0 5.4883 0.60547t4.043 1.7773q1.6406 1.1719 2.5 2.8711 0.85937 1.6797 0.85937 3.8477 0 2.1094-0.97656 3.7695-0.97656 1.6602-2.6758 2.832-1.6992 1.1524-3.9844 1.7774-2.2656 0.60547-4.8633 0.60547h-1.6797v9.4141h-8.6328zm10.352 12.539q2.0703 0 3.2422-0.85937 1.1719-0.85938 1.1719-2.5781 0-0.83984-0.35156-1.4648-0.33204-0.625-0.9375-1.0352-0.58594-0.42969-1.3867-0.64453t-1.7383-0.21484h-1.7188v6.7188q0.27343 0.0391 0.70312 0.0586t1.0156 0.0195z" style="paint-order:stroke markers fill"/><path d="m402.92 281.41q-2.5586 0.70313-3.6914 0.70313-7.2461 0-9.1016-6.6016l-1.0938-4.4531h-1.875v10.43h-8.75v-27.5h12.227q2.3828 0 4.4726 0.54687 2.0898 0.52735 3.6328 1.5625 1.5625 1.0156 2.4414 2.5195 0.89844 1.5039 0.89844 3.457 0 1.4453-0.37109 2.5976-0.35157 1.1328-1.0352 2.0508-0.68359 0.89844-1.6797 1.6016-0.97656 0.70312-2.2266 1.25l0.17578 0.95703q0.0586 0.33203 0.11719 0.5664 0.0586 0.23438 0.0977 0.39063l0.21484 0.83984q0.23437 0.74219 0.52734 1.2695 0.3125 0.50782 0.78125 0.83985 0.46875 0.3125 1.1524 0.46875 0.70312 0.13672 1.6992 0.13672 0.15625 0 0.48828-0.0391 0.35156-0.0391 0.89843-0.11718zm-8.8476-18.945q0-0.76172-0.33203-1.25-0.3125-0.50781-0.87891-0.78125-0.56641-0.29297-1.3281-0.39062-0.76172-0.11719-1.6406-0.11719h-2.7344v5.5078h1.5234l1.2891-0.0586q0.76171-0.0586 1.4844-0.19532 0.74219-0.15625 1.3281-0.46875 0.58593-0.33203 0.9375-0.85937 0.35156-0.54688 0.35156-1.3867z" style="paint-order:stroke markers fill"/><path d="m404.76 267.78q0-5.957 3.7891-10.039 4.043-4.3555 10.938-4.3555 3.3594 0 6.0742 1.0938 2.7148 1.0742 4.6289 2.9883t2.9492 4.5703q1.0352 2.6367 1.0352 5.7422 0 1.875-0.42968 3.6719-0.42969 1.7969-1.2891 3.3984-0.83984 1.582-2.0898 2.9297-1.25 1.3281-2.8906 2.3047-1.6211 0.95703-3.6328 1.4844-1.9922 0.54688-4.3555 0.54688-2.4219 0-4.4531-0.54688-2.0117-0.54687-3.6523-1.5234-1.6406-0.97657-2.8906-2.3242-1.2305-1.3477-2.0703-2.9297-0.82031-1.6016-1.25-3.3789-0.41016-1.7773-0.41016-3.6328zm14.727 7.0703q1.543 0 2.6172-0.64453 1.0938-0.66406 1.7774-1.6797 0.70312-1.0352 1.0156-2.3047 0.33203-1.2695 0.33203-2.4805 0-1.582-0.41015-2.8906-0.39063-1.3281-1.1524-2.2852-0.74219-0.97657-1.8164-1.543-1.0547-0.56641-2.3633-0.625-1.5625 0.0391-2.6562 0.70312-1.0938 0.66407-1.7969 1.7188-0.68359 1.0352-1.0156 2.3438-0.3125 1.2891-0.3125 2.5781 0 1.5234 0.39063 2.832 0.41016 1.2891 1.1523 2.2461 0.76172 0.9375 1.8359 1.4844 1.0742 0.54687 2.4023 0.54687z" style="paint-order:stroke markers fill"/><path d="m436.18 279.2q0-0.58594 0.2474-1.0807 0.26042-0.49479 0.67708-0.84636 0.41667-0.35156 0.95053-0.54687 0.54687-0.20834 1.1198-0.20834 0.59896 0 1.1458 0.22136 0.54688 0.20833 0.95053 0.58594 0.41666 0.36458 0.65104 0.84635 0.2474 0.48177 0.2474 1.0286 0 0.61198-0.26042 1.1068-0.2474 0.49479-0.66407 0.85938-0.41666 0.35156-0.96354 0.54687-0.53385 0.19531-1.1068 0.19531-0.625 0-1.1719-0.20833-0.54687-0.20833-0.95052-0.57292-0.40365-0.36458-0.63802-0.85937-0.23438-0.49479-0.23438-1.0677z" style="paint-order:stroke markers fill"/><path d="m454.38 272.56q-1.4062-0.4427-2.6042-0.4427-0.61198 0-1.1068 0.19531-0.48177 0.19531-0.83333 0.54687-0.33855 0.35157-0.53386 0.85938-0.18229 0.49479-0.18229 1.1068t0.18229 1.1198q0.19531 0.49479 0.54688 0.85937 0.35156 0.36459 0.84635 0.5599 0.50782 0.19531 1.1328 0.19531 1.1849 0 2.5-0.44271l0.52083 3.724q-1.0026 0.52083-1.9661 0.6901-0.95053 0.16927-2.0703 0.16927-1.5755 0-2.9036-0.49479t-2.2917-1.3932-1.5104-2.1615q-0.53385-1.276-0.53385-2.8255t0.58594-2.8125q0.58593-1.276 1.5755-2.1745 1.0026-0.91146 2.3177-1.4062 1.3151-0.4948 2.7604-0.4948 0.63802 0 1.1458 0.0521 0.52084 0.0391 0.98959 0.16927 0.46875 0.11718 0.9375 0.32552 0.46875 0.20833 1.0156 0.53385z" style="paint-order:stroke markers fill"/><path d="m461.18 274.8q0 0.72917 0.20833 1.276 0.22136 0.54688 0.57292 0.91146 0.35157 0.36459 0.80729 0.54688 0.45573 0.18229 0.92449 0.18229 0.46875 0 0.91145-0.18229 0.45573-0.18229 0.8073-0.54688 0.36458-0.36458 0.57291-0.91146 0.22136-0.54687 0.22136-1.276t-0.22136-1.276q-0.20833-0.54688-0.57291-0.89844-0.35157-0.36458-0.8073-0.54688-0.4427-0.18229-0.91145-0.18229-0.46876 0-0.92449 0.18229-0.45572 0.1823-0.80729 0.54688-0.35156 0.35156-0.57292 0.89844-0.20833 0.54687-0.20833 1.276zm-5.2083 0q0.0651-1.6797 0.69011-2.9557 0.63802-1.276 1.6797-2.1484 1.0417-0.8724 2.4088-1.3151 1.3802-0.44271 2.9297-0.44271 1.6927 0 3.099 0.50782 1.4062 0.50781 2.4219 1.4193 1.0156 0.89844 1.5755 2.1615 0.55989 1.263 0.55989 2.7734 0 1.224-0.32552 2.2136-0.3125 0.98958-0.85937 1.7578-0.54688 0.75521-1.2891 1.3151-0.74219 0.55989-1.6016 0.92448-0.85938 0.35156-1.7839 0.52083-0.91146 0.16927-1.8229 0.16927-1.7188 0-3.138-0.49479-1.4062-0.50781-2.4219-1.4193t-1.5755-2.1745q-0.54688-1.276-0.54688-2.8125z" style="paint-order:stroke markers fill"/><path d="m488.16 271.26q0.54688-1.6536 1.7578-2.487 1.2109-0.83334 3.138-0.83334 1.0938 0 2.0182 0.50782 0.92448 0.50781 1.6016 1.4193 0.67708 0.91146 1.0547 2.1745 0.3776 1.263 0.3776 2.7865v6.6667h-5.625v-6.6667q0-0.55989-0.13021-1.0286-0.11718-0.48178-0.35156-0.83334-0.23437-0.35156-0.57292-0.54687-0.33854-0.19532-0.76823-0.19532-0.55989 0-0.96354 0.26042-0.40364 0.2474-0.66406 0.63802-0.26042 0.37761-0.39063 0.84636-0.11718 0.45573-0.11718 0.85937v6.6667h-5.5729v-6.6667q0-0.54687-0.13021-1.0156-0.11718-0.48178-0.36458-0.83334-0.23438-0.35156-0.58594-0.54687-0.35156-0.20834-0.79427-0.20834-0.48177 0-0.8724 0.19532-0.3776 0.19531-0.65104 0.54687-0.27344 0.33854-0.42969 0.79427-0.14323 0.45573-0.15625 0.96355v6.7708h-5.625v-13.164h5.625v2.7214q0.74219-1.6536 1.875-2.3828 1.1458-0.72917 2.6823-0.72917 0.74219 0 1.4323 0.19532 0.69011 0.18229 1.2891 0.58593 0.61198 0.40365 1.0938 1.0417 0.49479 0.625 0.82031 1.4974z" style="paint-order:stroke markers fill"/></g></g></svg>',
      close:
        '<span class="atcb-icon-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M2.321 13.529a7.927 7.927 0 0 1 0-11.208 7.927 7.927 0 0 1 11.208 0l86.471 86.471L186.47 2.321a7.927 7.927 0 0 1 11.209 0 7.927 7.927 0 0 1 0 11.208l-86.474 86.469 86.472 86.473a7.927 7.927 0 0 1-11.209 11.208l-86.471-86.471-86.469 86.471a7.927 7.927 0 0 1-11.208-11.208l86.471-86.473z"/></svg></span>',
      location:
        '<span class="atcb-icon-location"><svg viewBox="0 0 200 266.42" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m148.54 230.43c-12.12 13.291-26.234 25.193-42.083 34.82-1.9513 1.431-4.5964 1.6044-6.7645 0.21681-23.416-14.895-43.08-32.782-58.539-52.23-21.334-26.755-34.755-56.414-39.351-84.99-4.6831-28.966-0.30354-56.848 14.114-79.505 5.6805-8.9543 12.944-17.106 21.79-24.153 20.337-16.196 43.557-24.76 66.713-24.586 22.288 0.17345 44.295 8.4773 63.309 25.844 6.6778 6.0707 12.293 13.03 16.89 20.575 15.502 25.54 18.841 58.105 12.033 91.104-6.7212 32.608-23.416 65.737-48.11 92.839zm-48.544-178.91c27.492 0 49.758 22.288 49.758 49.758 0 27.492-22.288 49.758-49.758 49.758-27.492 0-49.758-22.267-49.758-49.758-0.02168-27.492 22.267-49.758 49.758-49.758z" stroke-width="2.1681"/></svg></span>',
      warning:
        '<span class="atcb-icon-warning"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="m100 0c27.613 0 52.613 11.195 70.711 29.293 18.094 18.094 29.289 43.098 29.289 70.707 0 27.613-11.195 52.613-29.289 70.711-18.098 18.094-43.098 29.289-70.711 29.289-27.609 0-52.613-11.195-70.707-29.289-18.098-18.098-29.293-43.098-29.293-70.711 0-27.609 11.195-52.613 29.293-70.707 18.094-18.098 43.098-29.293 70.707-29.293zm57.66 42.34c-14.758-14.754-35.145-23.883-57.66-23.883-22.516 0-42.902 9.1289-57.66 23.883-14.754 14.758-23.883 35.145-23.883 57.66 0 22.516 9.1289 42.902 23.883 57.66 14.758 14.754 35.145 23.883 57.66 23.883 22.516 0 42.902-9.1289 57.66-23.883 14.754-14.758 23.883-35.145 23.883-57.66 0-22.516-9.1289-42.902-23.883-57.66z" fill="#f44336" fill-rule="nonzero" stroke-width=".39062"/><g transform="matrix(3.8384 0 0 3.8384 2277.8 -576.85)" style="shape-inside:url(#rect7396);white-space:pre" aria-label="!"><path d="m-563.8 161.59-0.65341 20.185h-5.8381l-0.65341-20.185zm-3.5796 29.503q-1.5199 0-2.6136-1.0795-1.0796-1.0796-1.0796-2.6136 0-1.5057 1.0796-2.571 1.0938-1.0796 2.6136-1.0796 1.4631 0 2.571 1.0796 1.1222 1.0653 1.1222 2.571 0 1.0227-0.52557 1.8608-0.51137 0.83807-1.3494 1.3352-0.82387 0.49715-1.8182 0.49715z"/></g></svg></span>',
      checkmark:
        '<span class="atcb-icon-checkmark"><svg viewBox="0 0 122.88 122.87" xmlns="http://www.w3.org/2000/svg"><path fill:#39B54A; d="m33.666 50.046s6.0748-0.59297 17.413 4.2983c9.3883 4.5751 11.891 8.3955 11.891 8.3955 5.38-8.65 11.11-16.6 17.16-23.9 10.412-12.578 24.613-22.448 24.613-22.448l14.257-0.012228s-19.308 19.294-32.483 38.51c-13.175 19.216-22.877 41.21-22.877 41.21s-9.3948-18.164-14.53-24.53-10.77-11.59-17.52-16.22z" fill="#45b555"/><path fill:#3C3C3C; d="m61.44 0c9.53 0 18.55 2.17 26.61 6.04-3.3 2.61-6.36 5.11-9.21 7.53-5.43-1.97-11.28-3.05-17.39-3.05-14.06 0-26.79 5.7-36 14.92s-14.92 21.94-14.92 36 5.7 26.78 14.92 36 21.94 14.92 36 14.92 26.79-5.7 36-14.92c9.22-9.22 14.91-21.94 14.91-36 0-3.34-0.32-6.62-0.94-9.78 2.64-3.44 5.35-6.88 8.11-10.28 2.17 6.28 3.35 13.04 3.35 20.06 0 16.96-6.88 32.33-17.99 43.44-11.12 11.12-26.48 18-43.44 18s-32.32-6.88-43.44-18c-11.13-11.12-18.01-26.48-18.01-43.44 0-16.97 6.88-32.33 17.99-43.44 11.12-11.12 26.48-18 43.45-18z"/></svg></span>',
    }
  function J(t) {
    var e
    return (
      ((t = (function (e) {
        for (let t = 0; t < K.length; t++) {
          var a = K["" + t]
          null == e["" + a] || ("true" !== e["" + a] && !0 !== e["" + a])
            ? (e["" + a] = !1)
            : (e["" + a] = !0)
        }
        return e
      })(t)).timeZone =
        (([e = null] = [t.timeZone]), e && "" != e ? e : "GMT")),
      ((t = (function (t) {
        ;(null != t.listStyle && "" != t.listStyle) ||
          (t.listStyle = "dropdown")
        var e =
          "dropdown" == t.listStyle ||
          "dropdown-static" == t.listStyle ||
          "dropup-static" == t.listStyle
        "modal" === t.listStyle && (t.trigger = "click")
        null != t.buttonStyle &&
        "" != t.buttonStyle &&
        "default" != t.buttonStyle
          ? (("round" != t.buttonStyle &&
              "text" != t.buttonStyle &&
              "date" != t.buttonStyle &&
              "neumorphism" != t.buttonStyle) ||
              (t.trigger = "click"),
            "date" == t.buttonStyle && e && (t.listStyle = "overlay"))
          : (t.buttonStyle = "default")
        ;("default" != t.buttonStyle &&
          "3d" != t.buttonStyle &&
          "flat" != t.buttonStyle) ||
          !e ||
          t.hideTextLabelList ||
          !t.hideTextLabelButton ||
          (t.listStyle = "overlay")
        t.buttonsList && "date" == t.buttonStyle && (t.buttonsList = !1)
        return t
      })(
        (t = (function (e) {
          var a = []
          e.optionLabels = []
          let o = !1,
            n = !1
          for (let t = 0; t < e.options.length; t++) {
            const l = e.options["" + t].split("|")
            var i = l[0]
                .toLowerCase()
                .replace("microsoft", "ms")
                .replace(/\./, ""),
              r = null != l[1] ? l[1] : ""
            "apple" === i && (n = !0),
              "ical" === i && (o = !0),
              (A() && P.includes(i)) ||
                (null != e.recurrence &&
                  "" != e.recurrence &&
                  (!j.includes(i) ||
                    (null != e.recurrence_until &&
                      "" != e.recurrence_until &&
                      ("apple" === i || "ical" === i)) ||
                    (A() && "google" === i))) ||
                (e.subscribe && q.includes(i)) ||
                (a.push(i), e.optionLabels.push(r))
          }
          0 === a.length &&
            (A() || (a.push("ical"), e.optionLabels.push("")), (o = !0))
          A() && o && !n && (a.push("apple"), e.optionLabels.push(""))
          return (e.options = a), e
        })(
          (t = (function (t) {
            if (null != t.recurrence && "" != t.recurrence)
              if (
                ((t.recurrence = t.recurrence
                  .replace(/\s+/g, "")
                  .toUpperCase()),
                /^(RRULE:[\w=;,:+-/\\]+|daily|weekly|monthly|yearly)$/im.test(
                  t.recurrence,
                ))
              )
                if (/^RRULE:/i.test(t.recurrence)) {
                  t.recurrence_simplyfied = !1
                  var e = t.recurrence.substring(6).split(";")
                  const a = new Object()
                  e.forEach(function (t) {
                    a[t.split("=")[0]] = t.split("=")[1]
                  }),
                    (t.recurrence_until = a.UNTIL || ""),
                    (t.recurrence_count = a.COUNT || ""),
                    (t.recurrence_byDay = a.BYDAY || ""),
                    (t.recurrence_byMonth = a.BYMONTH || ""),
                    (t.recurrence_byMonthDay = a.BYMONTHDAY || ""),
                    (t.recurrence_interval = a.INTERVAL || 1),
                    (t.recurrence_frequency = a.FREQ || "")
                } else
                  (t.recurrence_simplyfied = !0),
                    (null != t.recurrence_interval &&
                      "" != t.recurrence_interval) ||
                      (t.recurrence_interval = 1),
                    (null == t.recurrence_weekstart ||
                      ("" == t.recurrence_weekstart) |
                        (2 < t.recurrence_weekstart.length)) &&
                      (t.recurrence_weekstart = "MO"),
                    (t.recurrence_frequency = t.recurrence),
                    (t.recurrence =
                      "RRULE:FREQ=" +
                      t.recurrence +
                      ";WKST=" +
                      t.recurrence_weekstart +
                      ";INTERVAL=" +
                      t.recurrence_interval),
                    null != t.recurrence_until &&
                      "" != t.recurrence_until &&
                      (null != t.endTime && "" != t.endTime
                        ? (t.recurrence =
                            t.recurrence +
                            ";UNTIL=" +
                            t.recurrence_until.replace(/-/g, "").slice(0, 8) +
                            "T" +
                            t.endTime.replace(":", "") +
                            "00")
                        : (t.recurrence =
                            t.recurrence +
                            ";UNTIL=" +
                            t.recurrence_until.replace(/-/g, "").slice(0, 8))),
                    null != t.recurrence_count &&
                      "" != t.recurrence_count &&
                      (t.recurrence =
                        t.recurrence + ";COUNT=" + t.recurrence_count),
                    null != t.recurrence_byDay &&
                      "" != t.recurrence_byDay &&
                      (t.recurrence =
                        t.recurrence + ";BYDAY=" + t.recurrence_byDay),
                    null != t.recurrence_byMonth &&
                      "" != t.recurrence_byMonth &&
                      (t.recurrence =
                        t.recurrence + ";BYMONTH=" + t.recurrence_byMonth),
                    null != t.recurrence_byMonthDay &&
                      "" != t.recurrence_byMonthDay &&
                      (t.recurrence =
                        t.recurrence + ";BYMONTHDAY=" + t.recurrence_byMonthDay)
              else t.recurrence = "!wrong rrule format!"
            return t
          })(t)),
        )),
      )).sizes = (function (t) {
        var e = []
        if (((e.l = e.m = e.s = 16), null != t && "" != t)) {
          var a = t.split("|")
          for (let t = 0; t < a.length; t++) a["" + t] = parseInt(a["" + t])
          0 <= a[0] && a[0] < 11 && (e.l = e.m = e.s = 10 + a[0]),
            2 < a.length
              ? (0 <= a[1] && a[1] < 11 && (e.m = 10 + a[1]),
                0 <= a[2] && a[2] < 11 && (e.s = 10 + a[2]))
              : 2 == a.length &&
                0 <= a[1] &&
                a[1] < 11 &&
                (e.m = e.s = 10 + a[1])
        }
        return e
      })(t.size)),
      (t.lightMode = (function (t = "") {
        if ("system" == t && l())
          return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        return "bodyScheme" == t || "dark" == t ? t : "light"
      })(t.lightMode)),
      (t = (function (e) {
        ;(null == e.pastDateHandling ||
          ("disable" != e.pastDateHandling && "hide" != e.pastDateHandling)) &&
          (e.pastDateHandling = "none")
        var t = (function () {
          for (let t = 0; t < e.dates.length; t++)
            if (!e.dates["" + t].overdue) return !1
          return !0
        })()
        ;(e.allOverdue = !1),
          t &&
            ((e.allOverdue = !0),
            "disable" == e.pastDateHandling
              ? (e.disabled = !0)
              : "hide" == e.pastDateHandling && (e.hidden = !0))
        ;(e.disabled || e.hidden) && (e.blockInteraction = !0)
        return e
      })(
        (t = (function (e) {
          for (let t = 0; t < e.dates.length; t++)
            (null !=
              (e = (function (t, e) {
                null != t.dates["" + e].description &&
                "" != t.dates["" + e].description
                  ? ((t.dates["" + e].description = t.dates[
                      "" + e
                    ].description.replace(
                      /(\\r\\n|\\n|\\r|<br(\s|\s\/|\/|)>)/g,
                      "",
                    )),
                    (t.dates["" + e].descriptionHtmlFree = n(
                      t.dates["" + e].description,
                      !0,
                    )),
                    (t.dates["" + e].descriptionHtmlFreeICal = n(
                      t.dates["" + e].description,
                      !0,
                      !0,
                    )),
                    (t.dates["" + e].description = n(
                      t.dates["" + e].description,
                    )))
                  : null == t.dates["" + e].description &&
                    null != t.description &&
                    "" != t.description
                  ? ((t.description = t.description.replace(
                      /(\\r\\n|\\n|\\r|<br(\s|\s\/|\/|)>)/g,
                      "",
                    )),
                    (t.dates["" + e].descriptionHtmlFree = n(
                      t.description,
                      !0,
                    )),
                    (t.dates["" + e].descriptionHtmlFreeICal = n(
                      t.description,
                      !0,
                      !0,
                    )),
                    (t.dates["" + e].description = n(t.description)))
                  : (t.dates["" + e].descriptionHtmlFree = t.dates[
                      "" + e
                    ].description =
                      "")
                return t
              })(e, t)).dates["" + t].name &&
              "" != e.dates["" + t].name) ||
              (e.dates["" + t].name = e.name),
              null == e.dates["" + t].status
                ? (e.dates["" + t].status = e.status.toUpperCase())
                : (e.dates["" + t].status =
                    e.dates["" + t].status.toUpperCase()),
              null == e.dates["" + t].sequence &&
                (e.dates["" + t].sequence = e.sequence),
              null == e.dates["" + t].organizer &&
                null != e.organizer &&
                (e.dates["" + t].organizer = e.organizer),
              null == e.dates["" + t].attendee &&
                null != e.attendee &&
                (e.dates["" + t].attendee = e.attendee),
              null == e.dates["" + t].availability && null != e.availability
                ? (e.dates["" + t].availability = e.availability.toLowerCase())
                : null != e.dates["" + t].availability &&
                  (e.dates["" + t].availability =
                    e.dates["" + t].availability.toLowerCase()),
              null == e.dates["" + t].location &&
                null != e.location &&
                (e.dates["" + t].location = e.location),
              e.dates["" + t].location &&
              e.dates["" + t].location.startsWith("http")
                ? (e.dates["" + t].onlineEvent = !0)
                : (e.dates["" + t].onlineEvent = !1),
              null == e.dates["" + t].uid &&
                (0 == t && null != e.uid && "" != e.uid
                  ? (e.dates[0].uid = e.uid)
                  : (e.dates["" + t].uid = kt()))
          null != e.recurrence &&
            "" != e.recurrence &&
            (e.dates[0].recurrence = e.recurrence)
          1 < e.dates.length &&
            e.dates.sort((t, e) => t.timestamp - e.timestamp)
          return e
        })(
          (t = (function (t) {
            ;(null != t.status && "" != t.status) || (t.status = "CONFIRMED")
            ;(null != t.sequence && "" != t.sequence) || (t.sequence = 0)
            return t
          })(
            (t = (function (e) {
              if (null != e.dates && 0 < e.dates.length)
                for (let t = 0; t < e.dates.length; t++) {
                  null == e.dates["" + t].timeZone &&
                    (e.dates["" + t].timeZone = e.timeZone)
                  var a = $(e.dates["" + t])
                  ;(e.dates["" + t].startTime = a.startTime),
                    (e.dates["" + t].endTime = a.endTime),
                    (e.dates["" + t].timeZone = a.timeZone),
                    (e.dates["" + t].startDate = o(a.startDate)),
                    (e.dates["" + t].endDate = o(a.endDate)),
                    (e.dates["" + t].timestamp = X(
                      "timestamp",
                      e.dates["" + t].startDate,
                      e.dates["" + t].startTime,
                      e.dates["" + t].timeZone,
                    )),
                    (e.dates["" + t].overdue = X(
                      "overdue",
                      e.dates["" + t].endDate,
                      e.dates["" + t].endTime,
                      e.dates["" + t].timeZone,
                    ))
                }
              else {
                var t = $(e)
                ;(e.dates = []),
                  (e.dates[0] = new Object()),
                  (e.startTime = e.dates[0].startTime = t.startTime),
                  (e.endTime = e.dates[0].endTime = t.endTime),
                  (e.timeZone = e.dates[0].timeZone = t.timeZone),
                  (e.startDate = e.dates[0].startDate = o(t.startDate)),
                  (e.endDate = e.dates[0].endDate = o(t.endDate)),
                  e.recurrence
                    ? (e.dates[0].overdue = !1)
                    : (e.dates[0].overdue = X(
                        "overdue",
                        e.endDate,
                        e.endTime,
                        e.timeZone,
                      ))
              }
              t = new Date()
              ;(null != e.created && "" != e.created) ||
                (e.created = h(t, "clean", !0))
              ;(null != e.updated && "" != e.updated) ||
                (e.updated = h(t, "clean", !0))
              return e
            })(
              (t = (function (t) {
                ;(null != t.language &&
                  "" != t.language &&
                  At.includes(t.language)) ||
                  (t.language = "en")
                2 < t.language.length &&
                  (t.language = t.language.substring(0, 2))
                Tt.includes(t.language) ? (t.rtl = !0) : (t.rtl = !1)
                return t
              })(t)),
            )),
          )),
        )),
      ))
    )
  }
  function $(a) {
    ;(null != a.endDate && "" != a.endDate) || (a.endDate = a.startDate)
    return (
      ["start", "end"].forEach(function (t) {
        var e
        ;/^(\d{4}-\d{2}-\d{2}T?(?:\d{2}:\d{2}|)Z?|today(?:\+\d{1,4}|))$/.test(
          a[t + "Date"],
        )
          ? (null != a[t + "Date"] &&
              ((a[t + "Date"] = a[t + "Date"]
                .replace(/\.\d{3}/, "")
                .replace("Z", "")),
              null != (e = a[t + "Date"].split("T"))[1] &&
                ((a[t + "Date"] = e[0]), (a[t + "Time"] = e[1]))),
            null != a[t + "Time"] &&
              8 === a[t + "Time"].length &&
              ((e = a[t + "Time"]),
              (a[t + "Time"] = e.substring(0, e.length - 3))))
          : (a[t + "Date"] = "badly-formed")
      }),
      "currentBrowser" == a.timeZone &&
        (a.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone),
      a
    )
  }
  function X(t, e, a = null, o) {
    try {
      var n = a
        ? ((r = m(o, e, a)), new Date(e + " " + a + ":00 GMT" + r))
        : new Date(e)
      if ("timestamp" === t) return n.getTime()
      a || n.setDate(n.getDate() + 1)
      var i = new Date().toISOString()
      return n.getTime() < new Date(i).getTime()
    } catch (t) {
      return !1
    }
    var r
  }
  function o(t) {
    var e = new Date(),
      e =
        e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1) + "-" + e.getUTCDate(),
      e = (t = t.replace(/today/gi, e)).split("+")
    const a = e[0].split("-")
    t =
      a[0].length < 4
        ? new Date(Date.UTC(a[2], a[0] - 1, a[1]))
        : new Date(Date.UTC(a[0], a[1] - 1, a[2]))
    null != e[1] && 0 < e[1] && t.setDate(t.getDate() + parseInt(e[1]))
    try {
      return t.toISOString().replace(/T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g, "")
    } catch (t) {
      return !1
    }
  }
  function tt(a) {
    if (
      (a.validationError && (a.validationError = null),
      null == a.options || a.options.length < 1)
    )
      a.validationError =
        "Add to Calendar Button generation failed: no valid options set"
    else {
      if (null != a.name && "" != a.name) {
        if (null != a.dates && 0 < a.dates.length) {
          const o = ["name"]
          return ["name", "startDate"].every(function (e) {
            for (let t = 0; t < a.dates.length; t++)
              if (
                (!o.includes("" + e) &&
                  (null == a.dates["" + t]["" + e] ||
                    "" == a.dates["" + t]["" + e])) ||
                (o.includes("" + e) &&
                  (null == a.dates["" + t]["" + e] ||
                    "" == a.dates["" + t]["" + e]) &&
                  (null == a["" + e] || "" == a["" + e]))
              )
                return (
                  (a.validationError =
                    "Add to Calendar Button generation failed: required setting missing [dates array object #" +
                    (t + 1) +
                    "/" +
                    a.dates.length +
                    "] => [" +
                    e +
                    "]"),
                  !1
                )
            return !0
          })
        }
        return ["startDate"].every(function (t) {
          return (
            (null != a["" + t] && "" != a["" + t]) ||
            ((a.validationError =
              "Add to Calendar Button generation failed: required setting missing [" +
              t +
              "]"),
            !1)
          )
        })
      }
      a.validationError =
        "Add to Calendar Button generation failed: required name information missing"
    }
  }
  function et(t) {
    t.validationError && (t.validationError = null)
    var e,
      a,
      o = "Add to Calendar Button generation (" + t.identifier + ")"
    return (
      at(t, o) &&
      (function (t, e) {
        if (
          [
            "default",
            "3d",
            "flat",
            "round",
            "neumorphism",
            "text",
            "date",
            "custom",
            "none",
          ].includes(t.buttonStyle)
        )
          if (
            null == t.customCss ||
            "" == t.customCss ||
            (d(t.customCss, !1) && /\.css$/m.test(t.customCss))
          ) {
            if (
              (null != t.customCss && "" != t.customCss) ||
              "custom" != t.buttonStyle
            )
              return 1
            t.validationError =
              e +
              ' failed: buttonStyle "custom" selected, but no customCss file provided'
          } else
            t.validationError =
              e + " failed: customCss provided, but no valid url"
        else t.validationError = e + " failed: provided buttonStyle invalid"
        return
      })(t, o) &&
      ((a = o),
      (1 != (e = t).subscribe ||
        (null != e.icsFile && "" != e.icsFile) ||
        ((e.validationError =
          a +
          " failed: a subscription calendar requires a valid explicit ics file as well"),
        0)) &&
        ((e = o),
        (/^\d{8}T\d{6}Z$/.test((a = t).created) ||
          ((a.validationError =
            e +
            " failed: created date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ"),
          0)) &&
          ((a = o),
          (/^\d{8}T\d{6}Z$/.test((e = t).updated) ||
            ((e.validationError =
              a +
              " failed: updated date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ"),
            0)) &&
            (function (e, a) {
              if (null == e.options || e.options.length < 1)
                return void (e.validationError =
                  a + " failed: no valid options available")
              return !!e.options.every(function (t) {
                return (
                  !!I.includes(t) ||
                  ((e.validationError =
                    a + " failed: invalid option [" + t + "]"),
                  !1)
                )
              })
            })(t, o) &&
            (function (e, a) {
              for (let t = 0; t < e.dates.length; t++) {
                var o =
                  1 == e.dates.length
                    ? ""
                    : " [dates array object #" +
                      (t + 1) +
                      "/" +
                      e.dates.length +
                      "] "
                if (!at(e, a, t, o)) return
                if (
                  !(function (t, e, a, o) {
                    return (
                      "TENTATIVE" == t.dates["" + a].status ||
                      "CONFIRMED" == t.dates["" + a].status ||
                      "CANCELLED" == t.dates["" + a].status ||
                      ((t.validationError =
                        e +
                        " failed: event status needs to be TENTATIVE, CONFIRMED, or CANCELLED" +
                        o),
                      !1)
                    )
                  })(e, a, t, o)
                )
                  return
                if (
                  !(function (t, e, a, o) {
                    return (
                      null == t.dates["" + a].availability ||
                      "" == t.dates["" + a].availability ||
                      "free" == t.dates["" + a].availability ||
                      "busy" == t.dates["" + a].availability ||
                      ((t.validationError =
                        e +
                        ' failed: event availability needs to be "free" or "busy"' +
                        o),
                      !1)
                    )
                  })(e, a, t, o)
                )
                  return
                if (
                  !(function (t, e, a, o) {
                    if (
                      null != t.dates["" + a].organizer &&
                      "" != t.dates["" + a].organizer
                    ) {
                      a = t.dates["" + a].organizer.split("|")
                      if (
                        2 != a.length ||
                        50 < a[0].length ||
                        80 < a[1].length ||
                        !ht(a[1])
                      )
                        return void (t.validationError =
                          e +
                          ' failed: organizer needs to match the schema "NAME|EMAIL" with a valid email address' +
                          o)
                    }
                    return 1
                  })(e, a, t, o)
                )
                  return
                if (
                  !(function (t, e, a, o) {
                    if (
                      null != t.dates["" + a].attendee &&
                      "" != t.dates["" + a].attendee
                    ) {
                      if (
                        null == t.dates["" + a].organizer ||
                        "" == t.dates["" + a].organizer
                      )
                        return void (t.validationError =
                          e +
                          " failed: if an attendee is set, you also need to set the organizer" +
                          o)
                      a = t.dates["" + a].attendee.split("|")
                      if (
                        2 != a.length ||
                        50 < a[0].length ||
                        80 < a[1].length ||
                        !ht(a[1])
                      )
                        return void (t.validationError =
                          e +
                          ' failed: attendee needs to match the schema "NAME|EMAIL" with a valid email address' +
                          o)
                    }
                    return 1
                  })(e, a, t, o)
                )
                  return
                if (
                  !(function (t, e, a, o) {
                    ;/^(\w|-){1,254}$/.test(t.dates["" + a].uid) ||
                      (t.debug &&
                        console.warn(
                          e +
                            ": UID not valid. May only contain alpha, digits, and dashes; and be less than 255 characters. Falling back to an automated value!" +
                            o,
                        ),
                      (t.dates["" + a].uid = kt()))
                    !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
                      t.dates["" + a].uid,
                    ) &&
                      t.debug &&
                      console.warn(
                        e +
                          ": UID is highly recommended to be a hex-encoded random Universally Unique Identifier (UUID)!" +
                          o,
                      )
                    return 1
                  })(e, a, t, o)
                )
                  return
                if (
                  !(function (t, e, a, o) {
                    ;/^\d+$/.test(t.dates["" + a].sequence) ||
                      (t.debug &&
                        console.log(
                          e +
                            ": sequence needs to be a number. Used the default 0 instead" +
                            o,
                        ),
                      (t.dates["" + a].sequence = 0))
                    return 1
                  })(e, a, t, o)
                )
                  return
                if (
                  !(function (t, e, a, o) {
                    var n = (function (t = !1) {
                      return (
                        0 == i.length &&
                          (i = (function () {
                            var t,
                              e,
                              a = []
                            for ([t, e] of Object.entries(r))
                              if ("object" != typeof e || Array.isArray(e))
                                a.push(t)
                              else
                                for (var [o, n] of Object.entries(e))
                                  if ("object" != typeof n || Array.isArray(n))
                                    a.push(t + "/" + o)
                                  else
                                    for (var [i] of Object.entries(n))
                                      a.push(t + "/" + o + "/" + i)
                            return a
                          })()),
                        t ? JSON.stringify(i) : i
                      )
                    })()
                    return (
                      n.includes(t.dates["" + a].timeZone) ||
                      ((t.validationError =
                        e + " failed: invalid time zone given" + o),
                      !1)
                    )
                  })(e, a, t, o)
                )
                  return
                if (
                  !(function (a, o, n, i) {
                    const t = ["startDate", "endDate"],
                      r = t
                    if (
                      !t.every(function (t) {
                        var e
                        return 10 !== a.dates["" + n]["" + t].length
                          ? ((a.validationError =
                              o +
                              " failed: date misspelled [-> YYYY-MM-DD]" +
                              i),
                            !1)
                          : (e = a.dates["" + n]["" + t].split("-")).length <
                              3 || 3 < e.length
                          ? ((a.validationError =
                              o +
                              " failed: date misspelled [" +
                              t +
                              ": " +
                              a.dates["" + n]["" + t] +
                              "]" +
                              i),
                            !1)
                          : ((r["" + t] = new Date(e[0], e[1] - 1, e[2])), !0)
                      })
                    )
                      return
                    if (
                      !["startTime", "endTime"].every(function (t) {
                        if (null != a.dates["" + n]["" + t]) {
                          if (5 !== a.dates["" + n]["" + t].length)
                            return (
                              (a.validationError =
                                o + " failed: time misspelled [-> HH:MM]" + i),
                              !1
                            )
                          var e = a.dates["" + n]["" + t].split(":")
                          if (e.length < 2 || 2 < e.length)
                            return (
                              (a.validationError =
                                o +
                                " failed: time misspelled [" +
                                t +
                                ": " +
                                a.dates["" + n]["" + t] +
                                "]" +
                                i),
                              !1
                            )
                          if (23 < e[0])
                            return (
                              (a.validationError =
                                o +
                                " failed: time misspelled - hours number too high [" +
                                t +
                                ": " +
                                e[0] +
                                "]" +
                                i),
                              !1
                            )
                          if (59 < e[1])
                            return (
                              (a.validationError =
                                o +
                                " failed: time misspelled - minutes number too high [" +
                                t +
                                ": " +
                                e[1] +
                                "]" +
                                i),
                              !1
                            )
                          "startTime" == t &&
                            (r.startDate = new Date(
                              r.startDate.getTime() + 36e5 * e[0] + 6e4 * e[1],
                            )),
                            "endTime" == t &&
                              (r.endDate = new Date(
                                r.endDate.getTime() + 36e5 * e[0] + 6e4 * e[1],
                              ))
                        }
                        return !0
                      })
                    )
                      return
                    if (
                      (null != a.dates["" + n].startTime &&
                        null == a.dates["" + n].endTime) ||
                      (null == a.dates["" + n].startTime &&
                        null != a.dates["" + n].endTime)
                    )
                      return void (a.validationError =
                        o +
                        " failed: if you set a starting or end time, the respective other one also needs to be defined" +
                        i)
                    if (r.endDate < r.startDate)
                      return void (a.validationError =
                        o + " failed: end date before start date" + i)
                    return 1
                  })(e, a, t, o)
                )
                  return
              }
              return 1
            })(t, o) &&
            (function (t, e) {
              if (
                null != t.recurrence &&
                "" != t.recurrence &&
                1 < t.dates.length
              )
                t.validationError =
                  e + " failed: RRULE and multi-date set at the same time"
              else {
                if (
                  null == t.recurrence ||
                  "" == t.recurrence ||
                  /^RRULE:[\w=;,:+-/\\]+$/i.test(t.recurrence)
                )
                  return 1
                t.validationError = e + " failed: RRULE data misspelled"
              }
              return
            })(t, o) &&
            !(
              t.recurrence_simplyfied &&
              !(function (t, e) {
                if (
                  null == t.recurrence_interval ||
                  "" == t.recurrence_interval ||
                  /^\d+$/.test(t.recurrence_interval)
                )
                  if (
                    null == t.recurrence_until ||
                    "" == t.recurrence_until ||
                    /^(\d|-|:)+$/i.test(t.recurrence_until)
                  )
                    if (
                      null == t.recurrence_count ||
                      "" == t.recurrence_count ||
                      /^\d+$/.test(t.recurrence_count)
                    )
                      if (
                        null == t.recurrence_byMonth ||
                        "" == t.recurrence_byMonth ||
                        /^(\d|,)+$/.test(t.recurrence_byMonth)
                      )
                        if (
                          null == t.recurrence_byMonthDay ||
                          "" == t.recurrence_byMonthDay ||
                          /^(\d|,)+$/.test(t.recurrence_byMonthDay)
                        )
                          if (
                            null == t.recurrence_byDay ||
                            "" == t.recurrence_byDay ||
                            /^(\d|-|MO|TU|WE|TH|FR|SA|SU|,)+$/im.test(
                              t.recurrence_byDay,
                            )
                          ) {
                            if (
                              null == t.recurrence_weekstart ||
                              "" == t.recurrence_weekstart ||
                              /^(MO|TU|WE|TH|FR|SA|SU)$/im.test(
                                t.recurrence_weekstart,
                              )
                            )
                              return 1
                            t.validationError =
                              e +
                              " failed: recurrence data (weekstart) misspelled"
                          } else
                            t.validationError =
                              e + " failed: recurrence data (byDay) misspelled"
                        else
                          t.validationError =
                            e +
                            " failed: recurrence data (byMonthDay) misspelled"
                      else
                        t.validationError =
                          e + " failed: recurrence data (byMonth) misspelled"
                    else
                      t.validationError =
                        e + " failed: recurrence data (interval) misspelled"
                  else
                    t.validationError =
                      e + " failed: recurrence data (until) misspelled"
                else
                  t.validationError =
                    e + " failed: recurrence data (interval) misspelled"
                return
              })(t, o)
            ))))
    )
  }
  function at(t, e, a = "", o = "") {
    a =
      "" != a && null != t.dates["" + a].icsFile
        ? t.dates["" + a].icsFile
        : "" == a && null != t.icsFile
        ? t.icsFile
        : ""
    if (
      "" == a ||
      (d(a, !1) &&
        (t.icsFile.startsWith("https://") || t.icsFile.startsWith("http://")))
    )
      return 1
    t.validationError = e + " failed: explicit ics file path not valid" + o
  }
  function x(t, e, a = "", o = null, n = !1, i = !1) {
    "open" != e &&
    ("close" == e ||
      o.classList.contains("atcb-active") ||
      t.querySelector(".atcb-active-modal"))
      ? v(t, n)
      : ot(t, a, o, n, i)
  }
  function ot(t, e, a = null, o = !1, n = !1) {
    if (!t.querySelector(".atcb-list") && !t.querySelector(".atcb-modal")) {
      C("openList", e.identifier, e.identifier), (S.active = e.identifier)
      var i = (function (a, o) {
        const n = document.createElement("div")
        n.classList.add("atcb-list"),
          (n.role = "list"),
          o.rtl && n.classList.add("atcb-rtl")
        let i = 0
        {
          var t
          o.options.forEach(function (t) {
            var e = document.createElement("div")
            e.classList.add("atcb-list-item"),
              (e.role = "link"),
              (e.tabIndex = 0),
              i++,
              (e.dataset.optionNumber = i),
              n.append(e),
              c(a, o, e, t, !o.hideIconList, o.optionLabels[i - 1])
          }),
            "modal" === o.listStyle &&
              ((t = document.createElement("div")).classList.add(
                "atcb-list-item",
                "atcb-list-item-close",
              ),
              (t.role = "button"),
              (t.tabIndex = 0),
              i++,
              (t.dataset.optionNumber = i),
              n.append(t),
              c(a, o, t, "close", !o.hideIconList))
        }
        return n
      })(t, e)
      const l = document.createElement("div")
      l.classList.add("atcb-list-wrapper"),
        e.hideTextLabelList && l.classList.add("atcb-no-text"),
        a
          ? (a.classList.add("atcb-active"),
            a.setAttribute("aria-expanded", !0),
            "modal" === e.listStyle
              ? (a.classList.add("atcb-modal-style"),
                i.classList.add("atcb-modal"))
              : (l.append(i),
                l.classList.add("atcb-dropdown"),
                "overlay" === e.listStyle &&
                  l.classList.add("atcb-dropoverlay")),
            n && i.classList.add("atcb-generated-button"))
          : i.classList.add("atcb-modal")
      var r,
        n = nt(t, e.trigger, "modal" === e.listStyle, !e.hideBackground),
        i =
          ("modal" === e.listStyle
            ? ((r = dt(t, e))
                .querySelector(".atcb-modal-host-initialized")
                .append(n),
              n.append(i),
              e.hideBranding || it(r, !1),
              T(i, e.sizes),
              yt(r))
            : (e.forceOverlay &&
                ((t = (function (t, e) {
                  const a = dt(t, e),
                    o =
                      (w(a.querySelector(".atcb-modal-host-initialized")),
                      Array.from(t.children))
                  return (
                    o.forEach((t) => {
                      "STYLE" != t.tagName &&
                        a
                          .querySelector(".atcb-modal-host-initialized")
                          .append(t.cloneNode(!0))
                    }),
                    a.querySelector("button.atcb-button").removeAttribute("id"),
                    t.host.classList.add("atcb-shadow-hide"),
                    (t.querySelector(".atcb-initialized").style.opacity = "0"),
                    vt(t, a),
                    window.addEventListener("scroll", b),
                    window.addEventListener("resize", b),
                    a.querySelector(".atcb-modal-host-initialized")
                  )
                })(t, e)),
                (a = t.querySelector("button.atcb-button"))),
              t.querySelector(".atcb-initialized").append(l),
              l.append(i),
              "default" != e.buttonStyle &&
                l.classList.add("atcb-style-" + e.buttonStyle),
              e.hideBranding || it(t),
              t.append(n),
              T(i, e.sizes),
              (l.style.display = "none"),
              setTimeout(function () {
                ;(l.style.display = "block"),
                  "dropdown-static" === e.listStyle
                    ? xt(t, a, l, !0)
                    : "dropup-static" === e.listStyle
                    ? xt(t, a, l, !1, !0)
                    : xt(t, a, l)
              }, 5)),
          w(n),
          (r = t.querySelector(".atcb-list-item")) ||
            ((r = document.getElementById(e.identifier + "-modal-host"))
              ? r.shadowRoot.querySelector(".atcb-list-item")
              : void 0))
      i && (o ? i.focus() : (i.focus({ preventScroll: !0 }), i.blur()))
    }
  }
  function v(t, e = !1) {
    const a = document.getElementById(
      t.host.getAttribute("atcb-button-id") + "-modal-host",
    )
    var o =
      a && 0 !== a.length
        ? a.shadowRoot.querySelectorAll(".atcb-modal[data-modal-nr]")
        : []
    if (1 < o.length) {
      a.shadowRoot
        .querySelectorAll('.atcb-modal[data-modal-nr="' + o.length + '"]')[0]
        .remove()
      o = a.shadowRoot.querySelectorAll(
        '.atcb-modal[data-modal-nr="' + (o.length - 1) + '"]',
      )[0]
      o.style.display = "block"
      let t = o
      o = o.getElementsByTagName("button")
      ;(t = 0 < o.length ? o[0] : t).focus(), e || t.blur()
    } else {
      ;(o =
        t.querySelector(".atcb-active, .atcb-active-modal") ||
        document.querySelector(".atcb-active, .atcb-active-modal")),
        (e =
          (o && (o.focus({ preventScroll: !0 }), e || o.blur()),
          Array.from(t.querySelectorAll(".atcb-active")).forEach((t) => {
            t.classList.remove("atcb-active"),
              t.setAttribute("aria-expanded", !1)
          }),
          Array.from(t.querySelectorAll(".atcb-active-modal")).forEach((t) => {
            t.classList.remove("atcb-active-modal")
          }),
          Array.from(document.querySelectorAll(".atcb-active")).forEach((t) => {
            t.classList.remove("atcb-active"),
              t.setAttribute("aria-expanded", !1)
          }),
          Array.from(document.querySelectorAll(".atcb-active-modal")).forEach(
            (t) => {
              t.classList.remove("atcb-active-modal")
            },
          ),
          a && a.remove(),
          document.body.classList.remove("atcb-modal-no-scroll"),
          document.documentElement.classList.remove("atcb-modal-no-scroll"),
          Array.from(t.querySelectorAll(".atcb-list-wrapper"))
            .concat(Array.from(t.querySelectorAll(".atcb-list")))
            .concat(
              Array.from(
                t.querySelectorAll("#add-to-calendar-button-reference"),
              ),
            )
            .concat(Array.from(t.querySelectorAll("#atcb-bgoverlay")))
            .forEach((t) => t.remove()),
          document.querySelector(".atcb-shadow-hide")))
      e &&
        ((e.shadowRoot.querySelector(".atcb-initialized").style.opacity = "1"),
        e.classList.remove("atcb-shadow-hide"),
        window.removeEventListener("scroll", b),
        window.removeEventListener("resize", b)),
        (S.active = "")
    }
  }
  function c(e, a, o, n, t = !1, i = "", r = !1) {
    switch (n) {
      case "trigger":
      default:
        ;(o.id = a.identifier),
          a.blockInteraction ||
            (o.addEventListener("keyup", function (t) {
              ;("Enter" === t.key ||
                "Space" == t.code ||
                ("Alt" === t.key &&
                  "Control" === t.key &&
                  "Space" === t.code)) &&
                (t.preventDefault(), x(e, "auto", a, o, !0, !0))
            }),
            o.addEventListener(
              "touchend",
              u((t) => {
                t.preventDefault(), x(e, "auto", a, o, !1, !0)
              }),
            ),
            "click" === a.trigger
              ? o.addEventListener(
                  "mouseup",
                  u((t) => {
                    t.preventDefault(), x(e, "auto", a, o, !1, !0)
                  }),
                )
              : o.addEventListener(
                  "mouseenter",
                  u((t) => {
                    t.preventDefault(), x(e, "open", a, o, !1, !0)
                  }),
                ))
        break
      case "apple":
      case "google":
      case "ical":
      case "msteams":
      case "ms365":
      case "outlookcom":
      case "yahoo":
        ;(o.id = a.identifier + "-" + n),
          a.blockInteraction ||
            (o.addEventListener(
              "click",
              u(() => {
                r
                  ? (e.querySelector("#" + o.id).blur(),
                    C("openSingletonLink", o.id, a.identifier))
                  : (x(e, "close"), C("openCalendarLink", o.id, a.identifier)),
                  y(e, n, a)
              }),
            ),
            o.addEventListener("keyup", function (t) {
              "Enter" === t.key &&
                (t.preventDefault(),
                r
                  ? (e.querySelector("#" + o.id).blur(),
                    C("openSingletonLink", o.id, a.identifier))
                  : (x(e, "close"), C("openCalendarLink", o.id, a.identifier)),
                y(e, n, a, "all", !0))
            }))
        break
      case "close":
        ;(o.id = a.identifier + "-close"),
          o.addEventListener(
            "click",
            z(() => {
              C("closeList", "List Close Button", S.active), x(e, "close")
            }),
          ),
          o.addEventListener("keyup", function (t) {
            "Enter" === t.key &&
              (t.preventDefault(),
              C("closeList", "List Close Button", S.active),
              x(e, "close", a, "all", !0))
          })
    }
    var l = a,
      c = o,
      d = n,
      s = r,
      b = (function () {
        if ("none" != l.pastDateHandling) {
          let e = !0
          for (let t = 0; t < l.dates.length; t++)
            if (!l.dates["" + t].overdue) {
              e = !1
              break
            }
          if (e) return B("expired", l)
        }
        return B("label.addtocalendar", l)
      })()
    "" == i && 1 === l.options.length && (i = b),
      (b = {
        trigger: i || b,
        apple: i || "Apple",
        google: i || "Google",
        ical: i || B("label.icalfile", l),
        msteams: i || "Microsoft Teams",
        ms365: i || "Microsoft 365",
        outlookcom: i || "Outlook.com",
        yahoo: i || "Yahoo",
        close: B("close", l),
      }),
      (i = b["" + d]),
      ("date" == l.buttonStyle && ("trigger" == d || s)) ||
        (t &&
          ((b = document.createElement("span")).classList.add("atcb-icon"),
          (b.innerHTML = f["" + d]),
          c.append(b)),
        ((("trigger" != d && !s) || l.hideTextLabelButton) &&
          (s || "trigger" == d || l.hideTextLabelList)) ||
          ((t = document.createElement("span")).classList.add("atcb-text"),
          (t.textContent = i),
          c.append(t)),
        c.setAttribute("aria-label", i))
  }
  function nt(e, t = "", a = !1, o = !0) {
    var n = a ? document.createElement("dialog") : document.createElement("div")
    a && n.setAttribute("open", !0),
      (n.id = "atcb-bgoverlay"),
      o || n.classList.add("atcb-no-bg"),
      (n.role = "button"),
      (n.tabIndex = 0),
      n.addEventListener(
        "mouseup",
        u((t) => {
          t.target === t.currentTarget &&
            (C("closeList", "Background Hit", S.active), x(e, "close"))
        }),
      )
    let i = !1
    return (
      n.addEventListener(
        "touchstart",
        u(() => (i = !1)),
        { passive: !0 },
      ),
      n.addEventListener(
        "touchmove",
        u(() => (i = !0)),
        { passive: !0 },
      ),
      n.addEventListener(
        "touchend",
        z((t) => {
          !1 === i &&
            t.target === t.currentTarget &&
            (C("closeList", "Background Hit", S.active), x(e, "close"))
        }),
        { passive: !0 },
      ),
      "click" !== t
        ? n.addEventListener(
            "mousemove",
            u((t) => {
              t.target === t.currentTarget &&
                (C("closeList", "Background Hit", S.active), x(e, "close"))
            }),
          )
        : n.classList.add("atcb-click"),
      n
    )
  }
  function it(t, e = !0) {
    const a = document.createElement("div")
    ;(a.id = "add-to-calendar-button-reference"),
      (a.style.cssText =
        "width: 130px; padding: 5px; height: auto; opacity: .8; transform: translate3d(0, 0, 0); z-index: 15000000;"),
      setTimeout(() => {
        a.innerHTML =
          '<a href="https://add-to-calendar-pro.com" target="_blank" rel="noopener">' +
          f.atcb +
          "</a>"
      }, 500),
      e
        ? t.querySelector(".atcb-initialized .atcb-list-wrapper").append(a)
        : (1e3 < window.innerHeight || 1e3 < window.innerWidth) &&
          (t.append(a),
          (a.style.cssText += "position: fixed; bottom: 15px; right: 30px;"))
  }
  function L(o, n, t = "", e, a = "", i = [], r = [], l = !1, c = {}) {
    S.active = n.identifier
    const d = dt(o, n, !1)
    var s =
        (s = d.getElementById("atcb-bgoverlay")) ||
        ((s = nt(o, "click", !0, !n.hideBackground)),
        d.querySelector(".atcb-modal-host-initialized").append(s),
        s),
      b = document.createElement("div"),
      u =
        (b.classList.add("atcb-modal"),
        s.append(b),
        d.querySelectorAll(".atcb-modal").length),
      m =
        ((b.dataset.modalNr = u),
        (b.tabIndex = 0),
        b.focus({ preventScroll: !0 }),
        b.blur(),
        o.getElementById(n.identifier) ||
          document.getElementById(n.identifier)),
      m =
        (m && m.classList.add("atcb-active-modal"),
        document.createElement("div"))
    if (
      (m.classList.add("atcb-modal-box"),
      n.rtl && m.classList.add("atcb-rtl"),
      b.append(m),
      T(m, n.sizes),
      w(s),
      "" == t ||
        n.hideIconModal ||
        ((s = document.createElement("div")).classList.add("atcb-modal-icon"),
        (s.innerHTML = f["" + t]),
        m.append(s)),
      e &&
        "" != e &&
        ((t = document.createElement("div")).classList.add(
          "atcb-modal-headline",
        ),
        (t.textContent = e),
        m.append(t)),
      "" != a &&
        ((s = document.createElement("div")).classList.add(
          "atcb-modal-content",
        ),
        (s.innerHTML = a),
        m.append(s)),
      1 < r.length)
    ) {
      n.hideBranding || it(d, !1)
      var p = document.createElement("div")
      p.classList.add("atcb-modal-content"), m.append(p)
      for (let t = 1; t < r.length; t++) {
        const h = document.createElement("button")
        ;(h.type = "button"),
          (h.id = n.identifier + "-" + r[0] + "-" + t),
          0 < S["" + n.identifier]["" + r[0]][t - 1] &&
            h.classList.add("atcb-saved"),
          h.classList.add("atcb-subevent-btn"),
          p.append(h),
          lt(n, h, t),
          n.dates[t - 1].overdue && "none" != n.pastDateHandling
            ? (h.setAttribute("disabled", !0),
              (h.style.cssText =
                "opacity: .75; cursor: not-allowed; filter: brightness(95%); border-style: dashed;"))
            : (1 == t && l && h.focus(),
              h.addEventListener(
                "click",
                z(() => {
                  C("openSubEventLink", h.id, n.identifier),
                    h.blur(),
                    y(o, r[0], n, r["" + t], l, !0)
                }),
              ))
      }
    }
    0 == i.length && i.push({ type: "close", label: B("close", n) })
    const g = document.createElement("div")
    g.classList.add("atcb-modal-buttons"),
      m.append(g),
      i.forEach((t, e) => {
        let a
        switch (
          (null != t.href && "" != t.href
            ? ((a = document.createElement("a")).setAttribute("target", F),
              a.setAttribute("href", t.href),
              a.setAttribute("rel", "noopener"))
            : ((a = document.createElement("button")).type = "button"),
          a.classList.add("atcb-modal-btn"),
          t.primary && a.classList.add("atcb-modal-btn-primary"),
          (null != t.label && "" != t.label) ||
            (t.label = B("modal.button.default", n)),
          (a.textContent = t.label),
          g.append(a),
          0 == e && r.length < 2 && l && a.focus(),
          t.type)
        ) {
          default:
          case "close":
            a.addEventListener(
              "click",
              z(() => {
                C("closeList", "Modal Close Button", S.active), v(o)
              }),
            ),
              a.addEventListener("keyup", function (t) {
                ;("Enter" === t.key ||
                  "Space" == t.code ||
                  ("Alt" === t.key &&
                    "Control" === t.key &&
                    "Space" === t.code)) &&
                  (C("closeList", "Modal Close Button", S.active),
                  x(o, "close", "", "", !0))
              })
            break
          case "yahoo2nd":
            a.addEventListener(
              "click",
              z(() => {
                v(o), rt(o, n)
              }),
            ),
              a.addEventListener("keyup", function (t) {
                ;("Enter" === t.key ||
                  "Space" == t.code ||
                  ("Alt" === t.key &&
                    "Control" === t.key &&
                    "Space" === t.code)) &&
                  (x(o, "close", "", "", !0), rt(o, n, l))
              })
            break
          case "2timeslink":
            a.addEventListener(
              "click",
              z(() => {
                v(o), y(o, c.type, n, c.id, l, !1, !0)
              }),
            ),
              a.addEventListener("keyup", function (t) {
                ;("Enter" === t.key ||
                  "Space" == t.code ||
                  ("Alt" === t.key &&
                    "Control" === t.key &&
                    "Space" === t.code)) &&
                  (x(o, "close", "", "", !0), y(o, c.type, n, c.id, l, !1, !0))
              })
            break
          case "none":
        }
      }),
      1 < u &&
        (d.querySelector(
          '.atcb-modal[data-modal-nr="' + (u - 1) + '"]',
        ).style.display = "none"),
      yt(d, b)
  }
  function rt(t, e, a) {
    M(t, e), y(t, "yahoo2nd", e, "all", a)
  }
  function lt(p, t, g = "all") {
    "all" != g ? (g = parseInt(g) - 1) : 1 == p.dates.length && (g = 0)
    const e = (function () {
      let e,
        a,
        t,
        o,
        n = {},
        i = {}
      var r = []
      let l = "",
        c = ""
      ;(o =
        "all" == g
          ? ((n = D(p.dates[0])),
            (i = D(p.dates[p.dates.length - 1])),
            (t = p.dates[0].timeZone),
            p.dates[p.dates.length - 1].timeZone)
          : ((n = D(p.dates["" + g])),
            (i = n),
            (t = p.dates["" + g].timeZone))),
        (e = new Date(n.start)),
        (a = new Date(i.end)),
        n.allday && (t = "GMT"),
        i.allday && (o = "GMT")
      var d = Intl.DateTimeFormat().resolvedOptions().timeZone
      const s = ["global", "world-wide", "worldwide", "online"],
        b =
          ((function () {
            let t = 0,
              e = p.dates.length - 1
            for (t = "all" != g ? (e = g) : t; t <= e; t++)
              if (
                !!(
                  null == p.dates["" + t].location ||
                  "" == p.dates["" + t].location ||
                  !s.includes(p.dates["" + t].location.toLowerCase())
                ) &&
                !p.dates["" + t].onlineEvent
              )
                return !1
            return !0
          })()
            ? (t = o = d)
            : (n.allday || d == t || t == o || (l = "(" + t + ")"),
              ((i.allday || d == o) && t == o) || (c = "(" + o + ")")),
          new Date())
      var d = e.getFullYear() == b.getFullYear(),
        u = a.getFullYear() == b.getFullYear(),
        m = ct(t, d, p.language),
        u = ct(o, u, p.language)
      if (
        e.toLocaleDateString(p.language, u.DateLong) ===
        a.toLocaleDateString(p.language, u.DateLong)
      )
        if (n.allday) d || r.push(e.toLocaleDateString(p.language, m.DateLong))
        else {
          let t = ""
          ;(t = d
            ? e.toLocaleString(p.language, m.Time)
            : e.toLocaleString(p.language, m.DateTimeLong)),
            "en" == p.language && (t = t.replace(/:00/, "")),
            r.push(t),
            "" != l && r.push(l),
            r.push("-"),
            (t = a.toLocaleTimeString(p.language, u.Time)),
            "en" == p.language && (t = t.replace(/:00/, "")),
            r.push(t),
            "" != c && r.push(c)
        }
      else {
        if (n.allday) r.push(e.toLocaleDateString(p.language, m.DateLong))
        else {
          let t = ""
          ;(t = d
            ? e.toLocaleString(p.language, m.Time)
            : e.toLocaleString(p.language, m.DateTimeLong)),
            "en" == p.language && (t = t.replace(/:00/, "")),
            r.push(t)
        }
        if (("" != l && r.push(l), r.push("-"), i.allday))
          r.push(a.toLocaleDateString(p.language, u.DateLong))
        else {
          let t = a.toLocaleString(p.language, u.DateTimeLong)
          "en" == p.language && (t = t.replace(/:00/, "")), r.push(t)
        }
        "" != c && r.push(c)
      }
      return r
    })()
    var a =
        "all" != g && "CANCELLED" == p.dates["" + g].status
          ? B("date.status.cancelled", p) +
            "<br>" +
            B("date.status.cancelled.cta", p)
          : "none" != p.pastDateHandling &&
            (("all" == g && p.allOverdue) ||
              ("all" != g && p.dates["" + g].overdue))
          ? B("expired", p)
          : p.label && "" != p.label
          ? p.label
          : "+ " + B("label.addtocalendar", p),
      o =
        "all" != g && "CANCELLED" == p.dates["" + g].status
          ? B("date.status.cancelled", p)
          : "",
      n = 0 == e.length ? B("recurring", p) + " &#x27F3;" : "&#x27F3;"
    let i = !1
    "all" === g && ((g = 0), (i = !0))
    const r = new Date(D(p.dates["" + g]).start),
      l = D(p.dates["" + g]).allday,
      c = p.dates["" + g].timeZone
    var d = document.createElement("div"),
      s =
        (d.classList.add("atcb-date-btn-left"),
        t.append(d),
        document.createElement("div")),
      b =
        (s.classList.add("atcb-date-btn-day"),
        d.append(s),
        document.createElement("div")),
      s =
        (b.classList.add("atcb-date-btn-month"),
        (s.textContent = l
          ? r.toLocaleString(p.language, { day: "numeric" })
          : r.toLocaleString(p.language, { day: "numeric", timeZone: c })),
        (b.textContent = l
          ? r.toLocaleString(p.language, { month: "short" })
          : r.toLocaleString(p.language, { month: "short", timeZone: c })),
        d.append(b),
        document.createElement("div")),
      d =
        (s.classList.add("atcb-date-btn-right"),
        t.append(s),
        document.createElement("div")),
      b =
        (d.classList.add("atcb-date-btn-details"),
        s.append(d),
        document.createElement("div"))
    if (
      (b.classList.add("atcb-date-btn-headline"),
      1 < p.dates.length && i
        ? (b.textContent = p.name)
        : (b.textContent = p.dates["" + g].name),
      d.append(b),
      (null != p.dates["" + g].location &&
        "" != p.dates["" + g].location &&
        !p.dates["" + g].onlineEvent) ||
      "" != o
        ? ((u = document.createElement("div")).classList.add(
            "atcb-date-btn-content",
          ),
          d.append(u),
          "" != o
            ? ((u.textContent = o),
              (u.style.fontWeight = "600"),
              (u.style.color = "#9c1a23"))
            : (u.classList.add("atcb-date-btn-content-location"),
              (o = document.createElement("span")).classList.add(
                "atcb-date-btn-content-icon",
              ),
              (o.innerHTML = f.location),
              u.append(o),
              ((o = document.createElement("span")).textContent =
                p.dates["" + g].location),
              u.append(o)))
        : "" == p.dates["" + g].description ||
          0 != e.length ||
          (null != p.recurrence && "" != p.recurrence)
        ? ((b.style.cssText = "-webkit-line-clamp: 2;"),
          0 != e.length ||
            (null != p.recurrence && "" != p.recurrence) ||
            ((s.style.alignSelf = "center"),
            (b.style.cssText = "text-align: center; -webkit-line-clamp: 2;")))
        : ((u = document.createElement("div")).classList.add(
            "atcb-date-btn-content",
          ),
          (u.textContent = p.dates["" + g].description),
          (u.style.cssText =
            "overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"),
          d.append(u)),
      0 < e.length || (null != p.recurrence && "" != p.recurrence))
    ) {
      var u,
        o = document.createElement("div"),
        b =
          (o.classList.add("atcb-date-btn-content"),
          d.append(o),
          document.createElement("span"))
      b.classList.add("atcb-date-btn-content-icon"),
        (b.innerHTML = f.ical),
        o.append(b)
      const m = document.createElement("span")
      m.classList.add("atcb-date-btn-content-text"),
        o.append(m),
        e.forEach(function (t) {
          var e = document.createElement("span")
          ;(e.textContent = t), m.append(e)
        }),
        null != p.recurrence &&
          "" != p.recurrence &&
          (((u = document.createElement("span")).innerHTML = n), m.append(u))
    }
    d = document.createElement("div")
    d.classList.add("atcb-date-btn-hover"),
      (d.innerHTML = a),
      s.append(d),
      p.hideCheckmark ||
        ((b = document.createElement("div")).classList.add("atcb-checkmark"),
        (b.innerHTML = f.checkmark),
        t.append(b))
  }
  function ct(t, e = !1, a = "en") {
    a = "en" == a ? "h12" : "h23"
    return e
      ? {
          DateLong: { timeZone: t, month: "short", day: "numeric" },
          DateTimeLong: {
            timeZone: t,
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hourCycle: a,
          },
          Time: {
            timeZone: t,
            hour: "numeric",
            minute: "2-digit",
            hourCycle: a,
          },
        }
      : {
          DateLong: {
            timeZone: t,
            year: "numeric",
            month: "numeric",
            day: "numeric",
          },
          DateTimeLong: {
            timeZone: t,
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hourCycle: a,
          },
          Time: {
            timeZone: t,
            hour: "numeric",
            minute: "2-digit",
            hourCycle: a,
          },
        }
  }
  function dt(t, e, a = !0) {
    var o = document.getElementById(e.identifier + "-modal-host")
    if (!a && o) return o.shadowRoot
    o && o.remove()
    ;(a = document.createElement("div")),
      (a.id = e.identifier + "-modal-host"),
      t.host.hasAttribute("styleLight") &&
        a.setAttribute("styleLight", t.host.getAttribute("styleLight")),
      t.host.hasAttribute("styleDark") &&
        a.setAttribute("styleDark", t.host.getAttribute("styleDark")),
      t.host.hasAttribute("cspnonce") &&
        a.setAttribute("cspnonce", t.host.getAttribute("cspnonce")),
      a.setAttribute("atcb-button-id", e.identifier),
      a.setAttribute(
        "style",
        "transform:translate3D(0, 0, 0);visibility:visible;opacity:1;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;z-index:13999998;",
      ),
      document.body.append(a),
      a.attachShadow({ mode: "open", delegateFocus: !0 }),
      (o = document.createElement("template"))
    return (
      (o.innerHTML =
        '<div class="atcb-modal-host-initialized" style="translate3D(0, 0, 0);visibility:visible;opacity:1;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;z-index:13999999;"></div>'),
      a.shadowRoot.append(o.content.cloneNode(!0)),
      O(a.shadowRoot, e),
      Rt(a.shadowRoot, null, e.buttonStyle, !1, !1, e.customCss),
      a.shadowRoot
    )
  }
  function st(e, t) {
    var a = document.createElement("script")
    if (((a.id = "atcb-schema-" + e.identifier), t.hasAttribute("cspnonce"))) {
      if (/[`'"()[\]{}<>\s]/.test(t.getAttribute("cspnonce")))
        throw new Error("cspnonce input contains forbidden characters.")
      a.setAttribute("nonce", t.getAttribute("cspnonce"))
    }
    a.type = "application/ld+json"
    var o,
      n = e.name.replace(/\s/g, ""),
      t = [],
      i =
        (1 < e.dates.length &&
          ((o = []).push('"@context":"https://schema.org"'),
          o.push('"@type":"EventSeries"'),
          o.push('"@id":"' + n + '"'),
          o.push('"name":"' + e.name + '",'),
          t.push("{\r\n" + o.join(",\r\n") + "\r\n")),
        [])
    for (let t = 0; t < e.dates.length; t++) {
      var r = [],
        l =
          (r.push('"@context":"https://schema.org"'),
          r.push('"@type":"Event"'),
          1 < e.dates.length && r.push('"@id":"' + n + "-" + (t + 1) + '"'),
          "CANCELLED" === e.dates["" + t].status &&
            r.push('"eventStatus":"https://schema.org/EventCancelled"'),
          r.push('"name":"' + e.dates["" + t].name + '"'),
          e.dates["" + t].descriptionHtmlFree &&
            r.push(
              '"description":"' + e.dates["" + t].descriptionHtmlFree + '"',
            ),
          D(e.dates["" + t], "delimiters", "general", !0)),
        c =
          (r.push('"startDate":"' + l.start + '"'),
          l.duration && r.push('"duration":"' + l.duration + '"'),
          r.push(
            e.dates["" + t].onlineEvent
              ? '"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",\r\n"location": {\r\n"@type":"VirtualLocation",\r\n"url":"' +
                  e.dates["" + t].location +
                  '"\r\n}'
              : '"location":"' + e.dates["" + t].location + '"',
          ),
          e.recurrence && "" !== e.recurrence
            ? r.push(
                ...(function (t, e) {
                  var a = []
                  a.push('"eventSchedule": { "@type": "Schedule"'),
                    a.push('"scheduleTimezone":"' + t.dates[0].timeZone + '"'),
                    t.recurrence_interval &&
                      "" !== t.recurrence_interval &&
                      t.recurrence_frequency &&
                      "" !== t.recurrence_frequency &&
                      ((o =
                        "P" +
                        t.recurrence_interval +
                        t.recurrence_frequency.substring(0, 1)),
                      a.push('"repeatFrequency":"' + o + '"'))
                  t.recurrence_byDay &&
                    "" !== t.recurrence_byDay &&
                    ((o = (function () {
                      if (/\d/.test(t.recurrence_byDay))
                        return '"' + t.recurrence_byDay + '"'
                      var e = t.recurrence_byDay.split(","),
                        a = {
                          MO: "https://schema.org/Monday",
                          TU: "https://schema.org/Tuesday",
                          WE: "https://schema.org/Wednesday",
                          TH: "https://schema.org/Thursday",
                          FR: "https://schema.org/Friday",
                          SA: "https://schema.org/Saturday",
                          SU: "https://schema.org/Sunday",
                        },
                        o = []
                      for (let t = 0; t < e.length; t++)
                        o.push('"' + a[e["" + t]] + '"')
                      return "[" + o.join(",") + "]"
                    })()),
                    a.push('"byDay":' + o))
                  t.recurrence_byMonth &&
                    "" !== t.recurrence_byMonth &&
                    ((o = t.recurrence_byMonth.includes(",")
                      ? "[" + t.recurrence_byMonth + "]"
                      : t.recurrence_byMonth),
                    a.push('"byMonth":"' + o + '"'))
                  {
                    var o
                    t.recurrence_byMonthDay &&
                      "" !== t.recurrence_byMonthDay &&
                      ((o = t.recurrence_byMonthDay.includes(",")
                        ? "[" + t.recurrence_byMonthDay + "]"
                        : t.recurrence_byMonthDay),
                      a.push('"byMonthDay":"' + o + '"'))
                  }
                  t.recurrence_count &&
                    "" !== t.recurrence_count &&
                    a.push('"repeatCount":"' + t.recurrence_count + '"')
                  t.recurrence_until &&
                    "" !== t.recurrence_until &&
                    a.push('"endDate":"' + t.recurrence_until + '"')
                  t.startTime &&
                    "" !== t.startTime &&
                    t.endTime &&
                    "" !== t.endTime &&
                    (a.push('"startTime":"' + t.startTime + ':00"'),
                    a.push('"endTime":"' + t.endTime + ':00"'),
                    a.push('"duration":"' + e.duration + '"'))
                  return a.push('"startDate":"' + t.startDate + '" }'), a
                })(e, l),
              )
            : r.push('"endDate":"' + l.end + '"'),
          e.dates["" + t].organizer &&
            "" !== e.dates["" + t].organizer &&
            ((l = e.dates["" + t].organizer.split("|")),
            r.push(
              '"organizer":{\r\n"@type":"Person",\r\n"name":"' +
                l[0] +
                '",\r\n"email":"' +
                l[1] +
                '"\r\n}',
            )),
          [])
      if (e.images) {
        if (Array.isArray(e.images))
          for (let t = 0; t < e.images.length; t++)
            d(e.images["" + t], e.debug) &&
              e.images["" + t].startsWith("http") &&
              c.push('"' + e.images["" + t] + '"')
      } else
        c.push('"https://add-to-calendar-button.com/demo_assets/img/1x1.png"'),
          c.push(
            '"https://add-to-calendar-button.com/demo_assets/img/4x3.png"',
          ),
          c.push(
            '"https://add-to-calendar-button.com/demo_assets/img/16x9.png"',
          )
      0 < c.length && r.push('"image":[\r\n' + c.join(",\r\n") + "]"),
        i.push("{\r\n" + r.join(",\r\n") + "\r\n}")
    }
    1 < e.dates.length
      ? (a.textContent =
          t.join(",\r\n") +
          '"subEvents":[\r\n' +
          i.join(",\r\n") +
          "\r\n]\r\n}")
      : (a.textContent = i[0]),
      document.body.insertBefore(a, document.body.firstChild)
  }
  function y(t, e, a, o = "all", n = !1, i = !1, r = !1) {
    let l = "apple" == e ? "ical" : e
    if (
      ("all" != o ? (o = parseInt(o) - 1) : 1 == a.dates.length && (o = 0),
      a.subscribe)
    ) {
      var c = t,
        d = l,
        s = a,
        b = n,
        u = s.icsFile.replace("https://", "webcal://")
      switch (d) {
        case "ical":
          E() || s.fakeAndroid ? bt(s, s.icsFile) : bt(s, u)
          break
        case "google":
          !(function (t, e) {
            e = /^(https?:\/\/|webcal:\/\/|\/\/)calendar\.google\.com\//.test(e)
              ? e.replace(/^(.)*\?cid=/, "")
              : encodeURIComponent(e)
            R(
              t,
              "google",
              "https://calendar.google.com/calendar/r?cid=" + e,
              !0,
            )
          })(s, u)
          break
        case "ms365":
          ut(s, u, s.name)
          break
        case "outlookcom":
          ut(s, u, s.name, "outlook")
          break
        case "yahoo":
          return void (s.proxy
            ? R(s, "yahoo", "", !0)
            : (wt(s.icsFile),
              L(
                c,
                s,
                "yahoo",
                B("modal.subscribe.yahoo.h", s),
                B("modal.clipboard.text", s) +
                  "<br>" +
                  B("modal.subscribe.yahoo.text", s),
                [
                  {
                    label: B("modal.subscribe.yahoo.button", s),
                    primary: !0,
                    type: "yahoo2nd",
                    href: "https://www.yahoo.com/calendar",
                  },
                  { label: B("cancel", s) },
                ],
                [],
                b,
              )))
        case "yahoo2nd":
          return void (wt(s.icsFile),
          L(
            c,
            s,
            "yahoo",
            B("modal.subscribe.yahoo.h", s),
            B("modal.clipboard.text", s) +
              "<br>" +
              B("modal.subscribe.yahoo.text", s),
            [
              {
                label: B("modal.subscribe.yahoo.button", s),
                type: "none",
                href: "https://www.yahoo.com/calendar",
              },
              { label: B("cancel", s) },
            ],
            [],
            b,
          ))
      }
      M(c, s)
    } else if ("all" != o) {
      if ("CANCELLED" == a.dates["" + o].status && "ical" != l)
        L(
          t,
          a,
          "warning",
          B("date.status.cancelled", a),
          B("date.status.cancelled.cta", a),
          [],
          [],
          n,
        )
      else {
        if (!r && A() && "google" === l)
          return void L(
            t,
            a,
            "warning",
            "",
            B("modal.crios.google.text", a),
            [
              { label: B("continue", a), primary: !0, type: "2timeslink" },
              { label: B("cancel", a) },
            ],
            [],
            n,
            { type: e, id: o + 1 },
          )
        switch (l) {
          case "ical":
            pt(t, a, o, n)
            break
          case "google":
            var m = a,
              p = a.dates["" + o],
              g = [],
              h =
                (g.push(
                  "https://calendar.google.com/calendar/render?action=TEMPLATE",
                ),
                D(p, "clean", "google"))
            g.push(
              "dates=" +
                encodeURIComponent(h.start) +
                "%2F" +
                encodeURIComponent(h.end),
            ),
              null == p.timeZone ||
                "" == p.timeZone ||
                /(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(
                  p.timeZone,
                ) ||
                h.allday ||
                g.push("ctz=" + p.timeZone),
              null != p.name &&
                "" != p.name &&
                g.push("text=" + encodeURIComponent(p.name)),
              (h = []),
              null != p.description &&
                "" != p.description &&
                h.push(p.description),
              null != p.location &&
                "" != p.location &&
                (g.push("location=" + encodeURIComponent(p.location)),
                (A() || m.fakeIOS) &&
                  (0 < h.length && h.push("<br><br>"),
                  h.push("&#128205;: " + p.location))),
              0 < h.length &&
                g.push("details=" + encodeURIComponent(h.join(""))),
              null != p.recurrence &&
                "" != p.recurrence &&
                g.push("recur=" + encodeURIComponent(p.recurrence)),
              null != p.availability &&
                "" != p.availability &&
                ((h =
                  "free" == p.availability
                    ? "crm=AVAILABLE&trp=false"
                    : "crm=BUSY&trp=true"),
                g.push(h)),
              R(m, "google", g.join("&"))
            break
          case "msteams":
            {
              p = a
              h = a.dates["" + o]
              ;(m = []), (g = D(h, "delimiters", "msteams", !0))
              !g.allday || Y() || p.fakeMobile
                ? (m.push("startTime=" + encodeURIComponent(g.start)),
                  m.push("endTime=" + encodeURIComponent(g.end)))
                : (m.push("startTime=" + g.start), m.push("endTime=" + g.end))
              null != h.name &&
                "" != h.name &&
                m.push("subject=" + encodeURIComponent(h.name))
              let t = ""
              null != h.location &&
                "" != h.location &&
                ((t = encodeURIComponent(h.location)),
                m.push("location=" + t),
                (t += " // "))
              null != h.descriptionHtmlFree &&
                "" != h.descriptionHtmlFree &&
                m.push(
                  "content=" + t + encodeURIComponent(h.descriptionHtmlFree),
                )
              R(
                p,
                "msteams",
                "https://teams.microsoft.com/l/meeting/new?" + m.join("&"),
              )
            }
            break
          case "ms365":
            mt(a, a.dates["" + o])
            break
          case "outlookcom":
            mt(a, a.dates["" + o], "outlook")
            break
          case "yahoo":
            var f = a,
              x = a.dates["" + o],
              v = [],
              y = (v.push("https://calendar.yahoo.com/?v=60"), D(x, "clean"))
            v.push(
              "st=" +
                encodeURIComponent(y.start) +
                "&et=" +
                encodeURIComponent(y.end),
            ),
              y.allday && v.push("dur=allday"),
              null != x.name &&
                "" != x.name &&
                v.push("title=" + encodeURIComponent(x.name)),
              null != x.location &&
                "" != x.location &&
                v.push("in_loc=" + encodeURIComponent(x.location)),
              null != x.descriptionHtmlFree &&
                "" != x.descriptionHtmlFree &&
                v.push("desc=" + encodeURIComponent(x.descriptionHtmlFree)),
              R(f, "yahoo", v.join("&"))
        }
      }
      ;(d = document.getElementById(a.identifier + "-modal-host")),
        (r =
          (!d ||
            ((r = d.shadowRoot.getElementById(
              a.identifier + "-" + e + "-" + (o + 1),
            )) &&
              r.classList.add("atcb-saved")),
          S["" + a.identifier]["" + e]["" + o]++,
          S["" + a.identifier]["" + e].filter(function (t) {
            return t < 1
          })))
      0 == r.length && M(t, a, i)
    } else {
      var r = t,
        k = e,
        e = l,
        w = a,
        T = n
      if (
        "ical" == e &&
        w.dates.every(function (t) {
          return (
            "CANCELLED" != t.status &&
            (null == t.organizer || "" == t.organizer)
          )
        })
      ) {
        pt(r, w, "all", T)
        for (let t = 0; t < S["" + w.identifier]["" + k].length; t++)
          S["" + w.identifier]["" + k]["" + t]++
        M(r, w, i)
      } else if (!i) {
        var z = [k]
        for (let t = 0; t < w.dates.length; t++) z.push(t + 1)
        L(
          r,
          w,
          k,
          B("modal.multidate.h", w),
          B("modal.multidate.text", w),
          [],
          z,
          T,
        )
      }
    }
  }
  function M(t, e, a = !1) {
    var o = t.getElementById(e.identifier)
    o && o.classList.add("atcb-saved"),
      C("success", e.identifier, e.identifier),
      a &&
        t.querySelectorAll(".atcb-modal[data-modal-nr]").length < 2 &&
        x(t, "close")
  }
  function bt(t, e) {
    R(t, "ical", e, !0)
  }
  function ut(t, e, a, o = "365") {
    var n = [],
      i =
        "outlook" == o
          ? "https://outlook.live.com/calendar/0/addfromweb/?"
          : "https://outlook.office.com/calendar/0/addfromweb/?"
    n.push("url=" + encodeURIComponent(e)),
      n.push("name=" + encodeURIComponent(a)),
      R(t, o, i + n.join("&"), !0)
  }
  function mt(t, e, a = "365") {
    var o = []
    const n =
      Y() || t.fakeMobile
        ? "/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent"
        : "/calendar/action/compose?rru=addevent"
    var i =
        "outlook" == a
          ? "https://outlook.live.com" + n
          : "https://outlook.office.com" + n,
      i = (o.push(i), D(e, "delimiters", "microsoft"))
    o.push("startdt=" + i.start),
      o.push("enddt=" + i.end),
      i.allday && o.push("allday=true"),
      null != e.name &&
        "" != e.name &&
        o.push("subject=" + encodeURIComponent(e.name)),
      null != e.location &&
        "" != e.location &&
        o.push("location=" + encodeURIComponent(e.location)),
      null != e.description &&
        "" != e.description &&
        o.push("body=" + encodeURIComponent(e.description)),
      R(t, a, o.join("&"))
  }
  function R(t, e, a, o = !1, n = "") {
    if (("" == n && (n = F), d(a))) {
      if (t.proxy && t.proKey && "" != t.proKey) {
        var o = o ? "s" : "o",
          i = a ? "?url=" + encodeURIComponent(a) : ""
        if (!d((a = "https://caldn.net/" + t.proKey + "/" + o + "/" + e + i)))
          return
      }
      t = window.open(a, n)
      t && t.focus()
    }
  }
  function pt(t, e, a = "all", o = !1) {
    "all" != a && (a = parseInt(a))
    var n = (function (t, e) {
      e = "all" != e && 0 != e ? "-" + parseInt(e) + 1 : ""
      if (null != t.iCalFileName && "" != t.iCalFileName)
        return t.iCalFileName + e
      if (null != t.icsFile && "" != t.icsFile) {
        t = t.icsFile.split("/").pop().split(".")[0]
        if ("" != t) return t + e
      }
      return "event-to-save-in-my-calendar" + e
    })(e, a)
    const i =
      "all" != a &&
      null != e.dates["" + a].icsFile &&
      "" != e.dates["" + a].icsFile
        ? e.dates["" + a].icsFile
        : null != e.icsFile && "" != e.icsFile
        ? e.icsFile
        : ""
    if (i && "" !== i && e.proxy) R(e, "ical", i)
    else {
      if (!("" == i || (A() && g() && 1 != e.bypassWebViewCheck)))
        return A() && !p()
          ? void gt(i.replace(/^https?:\/\//, "webcal://"), n)
          : void gt(i, n)
      var r = new Date()
      const s = ["BEGIN:VCALENDAR", "VERSION:2.0"],
        b =
          (s.push(
            "PRODID:-// https://add-to-calendar-pro.com // button v" +
              H +
              " //EN",
          ),
          s.push("CALSCALE:GREGORIAN"),
          "all" == a
            ? s.push("METHOD:PUBLISH")
            : null != e.dates["" + a].status &&
              "CANCELLED" == e.dates["" + a].status
            ? s.push("METHOD:CANCEL")
            : null != e.dates["" + a].organizer &&
              "" != e.dates["" + a].organizer
            ? s.push("METHOD:REQUEST")
            : s.push("METHOD:PUBLISH"),
          [])
      var l = "all" != a ? a : 0,
        c = "all" != a ? a : e.dates.length - 1
      for (let t = l; t <= c; t++) {
        const u = D(e.dates["" + t], "clean", "ical")
        d = void 0
        var d = u.allday
          ? ";VALUE=DATE"
          : null != e.dates["" + t].timeZone && "" != e.dates["" + t].timeZone
          ? ((d = (function (t, e = !1) {
              const a = N(t)
              var o
              return null == a[1] || "" == a[1]
                ? ""
                : ((o = "TZID=" + (t = "" == a[0] ? t : a[0])),
                  (t = [
                    "BEGIN:VTIMEZONE\r\nTZID:" +
                      t +
                      "\r\nX-LIC-LOCATION:" +
                      t +
                      "\r\nLAST-MODIFIED:" +
                      a[1]
                        .replace(/[^\w_\-:,;=+/<br>]/g, "")
                        .replace(/<br>/g, "\r\n") +
                      "END:VTIMEZONE",
                    o,
                  ]),
                  e ? JSON.stringify(t) : t)
            })(e.dates["" + t].timeZone)),
            b.includes(e.dates["" + t].timeZone) || s.push(d[0]),
            b.push(e.dates["" + t].timeZone),
            ";" + d[1])
          : void 0
        s.push("BEGIN:VEVENT"),
          s.push("UID:" + e.dates["" + t].uid),
          s.push("DTSTAMP:" + h(r, "clean", !0)),
          s.push("DTSTART" + d + ":" + u.start),
          s.push("DTEND" + d + ":" + u.end),
          s.push("SUMMARY:" + k(e.dates["" + t].name, !0)),
          null != e.dates["" + t].descriptionHtmlFreeICal &&
            "" != e.dates["" + t].descriptionHtmlFreeICal &&
            s.push(
              "DESCRIPTION:" + k(e.dates["" + t].descriptionHtmlFreeICal, !0),
            ),
          null != e.dates["" + t].description &&
            "" != e.dates["" + t].description &&
            s.push(
              'X-ALT-DESC;FMTTYPE=text/html:\r\n <!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 3.2//EN"">\r\n <HTML><BODY>\r\n ' +
                k(e.dates["" + t].description, !0) +
                "\r\n </BODY></HTML>",
            ),
          null != e.dates["" + t].location &&
            "" != e.dates["" + t].location &&
            s.push("LOCATION:" + k(e.dates["" + t].location, !0)),
          null != e.dates["" + t].organizer &&
            "" != e.dates["" + t].organizer &&
            ((d = e.dates["" + t].organizer.split("|")),
            s.push('ORGANIZER;CN="' + k(d[0], !1, !0) + '":MAILTO:' + d[1])),
          null != e.dates["" + t].attendee &&
            "" != e.dates["" + t].attendee &&
            ((d = e.dates["" + t].attendee.split("|")),
            s.push(
              'ATTENDEE;ROLE=REQ-PARTICIPANT;CN="' +
                k(d[0], !1, !0) +
                '":MAILTO:' +
                d[1],
            )),
          null != e.recurrence && "" != e.recurrence && s.push(e.recurrence),
          null != e.dates["" + t].availability &&
            "" != e.dates["" + t].availability &&
            ((d =
              "free" == e.dates["" + t].availability
                ? "TRANSPARENT"
                : "OPAQUE"),
            s.push("TRANSP:" + d)),
          s.push("SEQUENCE:" + e.dates["" + t].sequence),
          s.push("STATUS:" + e.dates["" + t].status),
          s.push("CREATED:" + e.created),
          s.push("LAST-MODIFIED:" + e.updated),
          s.push("END:VEVENT")
      }
      s.push("END:VCALENDAR")
      a =
        "" != i
          ? i
          : "data:text/calendar;charset=utf-8," +
            encodeURIComponent(s.join("\r\n"))
      ;(A() && !p()) || (g() && (A() || (E() && Z())))
        ? ((l = t),
          (t = e),
          (o = o),
          wt(a),
          A() && !p()
            ? L(
                l,
                t,
                "warning",
                B("modal.opensafari.ical.h", t),
                B("modal.opensafari.ical.text", t) +
                  "<br>" +
                  B("modal.clipboard.text", t) +
                  "<br>" +
                  B("modal.opensafari.ical.steps", t),
                [],
                [],
                o,
              )
            : L(
                l,
                t,
                "warning",
                B("modal.webview.ical.h", t),
                B("modal.webview.ical.text", t) +
                  "<br>" +
                  B("modal.clipboard.text", t) +
                  "<br>" +
                  B("modal.webview.ical.steps", t),
                [],
                [],
                o,
              ))
        : gt(a, n)
    }
  }
  function gt(t, e) {
    try {
      var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        o =
          ((a.rel = "noopener"),
          (a.href = t),
          Y() ? (a.target = "_self") : (a.target = "_blank"),
          (a.download = e + ".ics"),
          new MouseEvent("click", {
            view: window,
            button: 0,
            bubbles: !0,
            cancelable: !1,
          }))
      a.dispatchEvent(o),
        (window.URL || window.webkitURL).revokeObjectURL(a.href)
    } catch (t) {
      console.error(t)
    }
  }
  function D(t, e = "delimiters", a = "general", o = !1) {
    if (
      null != t.startTime &&
      "" != t.startTime &&
      null != t.endTime &&
      "" != t.endTime
    ) {
      var n = new Date(t.startDate + "T" + t.startTime + ":00.000+00:00"),
        i = new Date(t.endDate + "T" + t.endTime + ":00.000+00:00"),
        r = i - n
      const s = Math.floor(r / 1e3 / 60 / 60),
        b = Math.floor(((r - 60 * s * 60 * 1e3) / 1e3 / 60) % 60)
      r =
        s < 10
          ? "0" + s + ":" + ("0" + b).slice(-2)
          : s + ":" + ("0" + b).slice(-2)
      return "ical" == a ||
        ("google" == a &&
          !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(
            t.timeZone,
          ))
        ? {
            start: h(n, "clean", !0, !0),
            end: h(i, "clean", !0, !0),
            duration: r,
            allday: !1,
          }
        : ((l = m(t.timeZone, t.startDate, t.startTime)),
          (c = m(t.timeZone, t.endDate, t.endTime)),
          o
            ? ((o = l.slice(0, 3) + ":" + l.slice(3)),
              (d = c.slice(0, 3) + ":" + c.slice(3)),
              {
                start: n.toISOString().replace(".000Z", o),
                end: i.toISOString().replace(".000Z", d),
                duration: r,
                allday: !1,
              })
            : ((o =
                -1 *
                parseInt(l[0] + 1) *
                (60 *
                  (60 * parseInt(l.substring(1, 3)) +
                    parseInt(l.substring(3, 5))) *
                  1e3)),
              (d =
                -1 *
                parseInt(c[0] + 1) *
                (60 *
                  (60 * parseInt(c.substring(1, 3)) +
                    parseInt(c.substring(3, 5))) *
                  1e3)),
              n.setTime(n.getTime() + o),
              i.setTime(i.getTime() + d),
              { start: h(n, e), end: h(i, e), duration: r, allday: !1 }))
    }
    var l = t.startDate.split("-"),
      c = t.endDate.split("-"),
      o = new Date(Date.UTC(l[0], l[1] - 1, l[2], 12, 0, 0)),
      d = new Date(Date.UTC(c[0], c[1] - 1, c[2], 12, 0, 0))
    if (
      (("google" !== a &&
        ("microsoft" !== a || Y()) &&
        "msteams" !== a &&
        "ical" !== a) ||
        d.setDate(d.getDate() + 1),
      "msteams" !== a)
    )
      return { start: h(o, e, !1), end: h(d, e, !1), allday: !0 }
    if (Y()) {
      const u = o.getTimezoneOffset()
      n =
        u < 0
          ? "+" +
            ("0" + Math.abs(u / 60)).slice(-2) +
            ":" +
            ("0" + Math.abs(u % 60)).slice(-2)
          : "-" +
            ("0" + Math.abs(u / 60)).slice(-2) +
            ":" +
            ("0" + Math.abs(u % 60)).slice(-2)
      return {
        start: h(o, e, !1, !0) + "T00:00:00" + n,
        end: h(d, e, !1, !0) + "T00:00:00" + n,
        allday: !0,
      }
    }
    return {
      start: h(o, e, !1, !0) + "+00:00",
      end: h(d, e, !1, !0) + "+00:00",
      allday: !0,
    }
  }
  function h(t, e = "delimiters", a = !0, o = !1) {
    a = a
      ? "clean" == e
        ? /(-|:|(\.\d{3}))/g
        : /(\.\d{3})/g
      : "clean" == e
      ? /(-|T(\d{2}:\d{2}:\d{2}\.\d{3})Z)/g
      : /T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g
    return o
      ? t.toISOString().replace(a, "").replace("Z", "")
      : t.toISOString().replace(a, "")
  }
  function s(t, e = !0) {
    t = (e ? JSON.stringify(t) : t).replace(/(<(?!br)([^>]+)>)/gi, "")
    return e ? JSON.parse(t) : t
  }
  function d(t, e = !0) {
    if (
      !t.match(
        /((\.\.\/)|(\.\.\\)|(%2e%2e%2f)|(%252e%252e%252f)|(%2e%2e\/)|(%252e%252e\/)|(\.\.%2f)|(\.\.%252f)|(%2e%2e%5c)|(%252e%252e%255c)|(%2e%2e\\)|(%252e%252e\\)|(\.\.%5c)|(\.\.%255c)|(\.\.%c0%af)|(\.\.%25c0%25af)|(\.\.%c1%9c)|(\.\.%25c1%259c))/gi,
      )
    )
      return 1
    e &&
      console.error(
        "Seems like the generated URL includes at least one security issue and got blocked. Please check the calendar button parameters!",
      )
  }
  function ht(t) {
    return !!/^.{0,70}@.{1,30}\.[a-zA-Z]{2,9}$/.test(t)
  }
  function n(t, e = !1, a = !1) {
    return (t = e
      ? ((t = (t = t.replace(
          /\[(|\/)(url|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]|((\|.*)\[\/url\])/gi,
          "",
        )).replace(
          /\{(|\/)(url|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\}|((\|.*)\{\/url\})/gi,
          "",
        )),
        (t = a
          ? t.replace(/(\[br\]|\{br\})/gi, "\\n")
          : t.replace(/(\[br\]|\{br\})/gi, " ")).replace(
          /&[#a-zA-Z0-9]{1,9};/gi,
          "",
        ))
      : (t = (t = (t = t.replace(
          /\[(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]/gi,
          "<$1$2>",
        )).replace(
          /\{(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\}/gi,
          "<$1$2>",
        )).replace(
          /\[url\]([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\[\/url\]/gi,
          function (t, e) {
            return ft(e)
          },
        )).replace(
          /\{url\}([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\{\/url\}/gi,
          function (t, e) {
            return ft(e)
          },
        ))
  }
  function ft(t) {
    const e = t.split("|")
    t = 1 < e.length && "" != e[1] ? e[1] : e[0]
    return (
      '<a href="' + e[0] + '" target="' + F + '" rel="noopener">' + t + "</a>"
    )
  }
  function k(t, e = !0, a = !1) {
    return (
      (t = a
        ? t.replace(/"/g, "")
        : t
            .replace(/\\/g, "\\\\")
            .replace(/(,|;)/g, "\\$1")
            .replace(/\\\\n/g, "\\n")),
      (t = e ? t.replace(/.{60}/g, "$&\r\n ") : t)
    )
  }
  function xt(t, e, a, o = !1, n = !1) {
    let i = !1
    var r,
      l = e,
      c =
        (null !== e.querySelector(".atcb-dropdown-anchor") &&
          ((e = e.querySelector(".atcb-dropdown-anchor")), (i = !0)),
        (a.style.position = "relative"),
        (a.style.display = "inline-block"),
        e.getBoundingClientRect()),
      d = l.getBoundingClientRect(),
      s = l.parentNode.getBoundingClientRect(),
      b = document.documentElement.clientHeight,
      u =
        (!0 !== i || a.classList.contains("atcb-dropoverlay")
          ? ((a.style.minWidth = d.width + 20 + "px"),
            (r = a.getBoundingClientRect()),
            (a.style.width = r.width + "px"),
            (u = Math.round((d.width - r.width) / 4)),
            (a.style.margin =
              -Math.round((r.height + d.height) / 2) +
              "px " +
              u +
              "px 0 " +
              u +
              "px"))
          : ((r = a.getBoundingClientRect()),
            (a.style.width = r.width + "px"),
            a.classList.contains("atcb-dropup") ||
            (!o &&
              c.top + r.height > b - 20 &&
              20 < 2 * d.top + d.height - c.top - r.height) ||
            n
              ? (l.classList.add("atcb-dropup"),
                a.classList.add("atcb-dropup"),
                (a.style.bottom = s.bottom - d.bottom + (c.top - d.top) + "px"))
              : ((a.style.top = d.top - s.top + (c.top - d.top) + "px"),
                l.classList.contains("atcb-dropup") &&
                  l.classList.remove("atcb-dropup")),
            (c = e.getBoundingClientRect()),
            (a.style.minWidth = c.width + "px"),
            ((a.classList.contains("atcb-dropdown") &&
              !a.classList.contains("atcb-style-round")) ||
              a.classList.contains("atcb-style-text") ||
              a.classList.contains("atcb-style-neumorphism")) &&
              (a.style.maxWidth = c.width + "px"),
            (r = a.getBoundingClientRect()),
            (a.style.left =
              Math.round(c.left - s.left - (r.width - c.width) / 2) + "px")),
        (a.style.position = "absolute"),
        (a.style.display = "block"),
        t.querySelector("#add-to-calendar-button-reference"))
    u &&
      l.classList.contains("atcb-dropup") &&
      (l.parentNode.parentNode.after(u),
      (u.style.padding = "5px 15px"),
      (u.style.position = "absolute"),
      (u.style.left = d.left + "px"))
  }
  function vt(t, e) {
    ;(t = t.querySelector(".atcb-initialized").getBoundingClientRect()),
      (e = e.querySelector(".atcb-initialized"))
    ;(e.style.width = t.width + "px"),
      (e.style.height = t.height + "px"),
      (e.style.top = t.top + "px"),
      (e.style.left = t.left + "px")
  }
  function b() {
    var t = S.active
    null !== t &&
      "" !== t &&
      vt(
        document.querySelector(
          "add-to-calendar-button[atcb-button-id=" + t + "]",
        ).shadowRoot,
        document.querySelector("div[atcb-button-id=" + t + "]").shadowRoot,
      )
  }
  function yt(t, e = null) {
    t =
      null != e
        ? e
        : 0 === (e = t.querySelectorAll(".atcb-modal")).length
        ? null
        : e[e.length - 1]
    null != t &&
      (t.getBoundingClientRect().height + 150 > window.innerHeight
        ? (document.body.classList.add("atcb-modal-no-scroll"),
          document.documentElement.classList.add("atcb-modal-no-scroll"))
        : (document.body.classList.remove("atcb-modal-no-scroll"),
          document.documentElement.classList.remove("atcb-modal-no-scroll")))
  }
  function w(t) {
    ;(t.style.width = window.innerWidth + "px"),
      (t.style.height = window.innerHeight + 100 + "px")
  }
  function T(t, e) {
    t.style.setProperty("--base-font-size-l", e.l + "px"),
      t.style.setProperty("--base-font-size-m", e.m + "px"),
      t.style.setProperty("--base-font-size-s", e.s + "px")
  }
  function kt() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (t) =>
      (
        t ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (t / 4)))
      ).toString(16),
    )
  }
  function wt(t) {
    var e,
      a = document.createElement("input"),
      o = (document.body.append(a), a.contentEditable),
      n = a.readOnly
    ;(a.contentEditable = !0),
      (a.readOnly = !1),
      (a.value = t),
      A()
        ? ((t = document.createRange()).selectNodeContents(a),
          (e = window.getSelection()).removeAllRanges(),
          e.addRange(t),
          a.setSelectionRange(0, 999999))
        : a.select(),
      (a.contentEditable = o),
      (a.readOnly = n),
      document.execCommand("copy"),
      a.remove()
  }
  function z(e, a = 200) {
    let o
    return (...t) => {
      clearTimeout(o),
        (o = setTimeout(() => {
          e.apply(this, t)
        }, a))
    }
  }
  function u(e, a = 300) {
    let o
    return (...t) => {
      o || e.apply(this, t),
        clearTimeout(o),
        (o = setTimeout(() => {
          o = void 0
        }, a))
    }
  }
  function C(e, a, o) {
    o =
      document.getElementById(o) ||
      document.querySelector('[atcb-button-id="' + o + '"]')
    if ((o && o.setAttribute("atcb-last-event", e + ":" + a), l())) {
      o = e
      e = a
      let t = ""
      switch (o) {
        case "initialization":
          t = "Initialized"
          break
        case "openList":
          t = "Opened"
          break
        case "closeList":
          t = "Closed"
          break
        case "openCalendarLink":
        case "openSingletonLink":
        case "openSubEventLink":
          t = "Opened"
          break
        case "success":
          t = "Saved"
      }
      a = window.dataLayer = window.dataLayer || []
      a.push({
        eventCategory: "Add-to-Calendar-Button",
        eventAction: t,
        eventLabel: e,
        event: o,
      })
    }
  }
  const Tt = ["ar", "fa"],
    zt = {
      en: {
        "label.addtocalendar": "Add to Calendar",
        "label.icalfile": "iCal File",
        close: "Close",
        "modal.button.default": "Click me",
        "modal.webview.ical.h": "Open your browser",
        "modal.webview.ical.text":
          "Unfortunately, in-app browsers have problems with the way we generate the calendar file.",
        "modal.clipboard.text":
          "We automatically copied a magical URL into your clipboard.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Open another browser</strong> on your phone, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
        "modal.opensafari.ical.h": "Open Safari",
        "modal.opensafari.ical.text":
          "Unfortunately, iOS has some problems generating and opening the calendar file outside of Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Open Safari</strong>, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
        "modal.multidate.h": "This is an event series",
        "modal.multidate.text": "Add the individual events one by one:",
        "date.status.cancelled": "This date got cancelled.",
        "date.status.cancelled.cta": "Please update your calendar!",
        "modal.subscribe.yahoo.h": "Add Calendar to Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Open now the Yahoo Calendar.</li><li>Click the "Actions" tab.</li><li>Hit "Follow Other Calendars".</li><li>Set a name and paste the clipboard content into the url field.</li></ol>',
        "modal.subscribe.yahoo.button": "Open Yahoo Calendar",
        "modal.crios.google.text":
          "If you are using the Google Calendar app and it is not already open in the background, unfortunately, you might need to start this process twice.",
        continue: "Continue",
        cancel: "Cancel",
        expired: "Expired",
        recurring: "Recurring",
      },
      de: {
        "label.addtocalendar": "Im Kalender speichern",
        "label.icalfile": "iCal-Datei",
        close: "Schließen",
        "modal.button.default": "Klick mich",
        "modal.webview.ical.h": "Öffne deinen Browser",
        "modal.webview.ical.text":
          "Leider haben In-App-Browser Probleme mit der Art, wie wir Kalender-Dateien erzeugen.",
        "modal.clipboard.text":
          "Wir haben automatisch eine magische URL in deine Zwischenablage kopiert.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Öffne einen anderen Browser</strong> auf deinem Smartphone, ...</li><li>Nutze die <strong>Einfügen</strong>-Funktion, um fortzufahren.</li></ol>",
        "modal.opensafari.ical.h": "Öffne Safari",
        "modal.opensafari.ical.text":
          "Leider hat iOS einige Probleme beim Generieren und Öffnen der Kalenderdatei außerhalb von Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Öffne Safari</strong>, ...</li><li>Nutze die <strong>Einfügen</strong>-Funktion, um fortzufahren.</li></ol>",
        "modal.multidate.h": "Dies ist eine Termin-Reihe",
        "modal.multidate.text":
          "Füge die einzelnen Termine der Reihe nach deinem Kalender hinzu:",
        "date.status.cancelled": "Dieser Termin wurde abgesagt.",
        "date.status.cancelled.cta": "Bitte aktualisiere deinen Kalender!",
        "modal.subscribe.yahoo.h": "Kalender zu Yahoo hinzufügen",
        "modal.subscribe.yahoo.text":
          '<ol><li>Öffne den Yahoo-Kalender.</li><li>Klicke auf den "Aktionen" Tab.</li><li>Wähle "Weiteren Kalendern folgen".</li><li>Wähle einen Namen und füge die URL aus deiner Zwischenablage in das URL-Feld ein.</li></ol>',
        "modal.subscribe.yahoo.button": "Yahoo-Kalender öffnen",
        "modal.crios.google.text":
          "Wenn du die Google Calendar App verwendest und diese nicht bereits im Hintergrund geöffnet ist, musst du diesen Vorgang leider möglicherweise zweimal starten.",
        continue: "Weiter",
        cancel: "Abbrechen",
        expired: "Abgelaufen",
        recurring: "Wiederkehrend",
      },
      es: {
        "label.addtocalendar": "Añadir al Calendario",
        "label.icalfile": "iCal Ficha",
        close: "Ciérralo",
        "modal.button.default": "Haz clic mí",
        "modal.webview.ical.h": "Abra su browser",
        "modal.webview.ical.text":
          "Lamentablemente, los browsers in-app tienen problemas con la forma en que generamos el archivo del calendario.",
        "modal.clipboard.text":
          "Hemos copiado automáticamente una URL mágica en su portapapeles.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Abre otro browser</strong> en tu smartphone, ...</li><li>Utilice la función de <strong>pegar</strong> para continuar.</li></ol>",
        "modal.opensafari.ical.h": "Abrir Safari",
        "modal.opensafari.ical.text":
          "Desafortunadamente, iOS tiene algunos problemas para generar y abrir el archivo de calendario fuera de Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Abrir Safari</strong>, ...</li><li>Utilice la función de <strong>pegar</strong> para continuar.</li></ol>",
        "modal.multidate.h": "Esta es una serie de fechas",
        "modal.multidate.text":
          "Añada las fechas individuales a su calendario en orden:",
        "date.status.cancelled": "Esta fecha fue cancelada.",
        "date.status.cancelled.cta": "Actualice su calendario!",
        "modal.subscribe.yahoo.h": "Añadir calendario a Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Abra el calendario de Yahoo.</li><li>Haga clic en la pestaña "Acciones".</li><li>Seleccione "Seguir otros calendarios".</li><li>Elige un nombre y pega la URL de tu portapapeles en el campo URL.</li></ol>',
        "modal.subscribe.yahoo.button": "Abrir calendario de Yahoo",
        "modal.crios.google.text":
          "Si estás utilizando la aplicación Google Calendar y no está abierta en segundo plano, lamentablemente, es posible que necesites iniciar este proceso dos veces.",
        continue: "Continuar",
        cancel: "Cancelar",
        expired: "Caducada",
        recurring: "Periódica",
      },
      pt: {
        "label.addtocalendar": "Incluir no Calendário",
        "label.icalfile": "Ficheiro iCal",
        close: "Fechar",
        "modal.button.default": "Clicar-me",
        "modal.webview.ical.h": "Abra o seu browser",
        "modal.webview.ical.text":
          "Infelizmente, os navegadores em tampas têm problemas com a forma como geramos o ficheiro de calendário.",
        "modal.clipboard.text":
          "Copiámos automaticamente um URL mágico para a sua área de transferência.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Abrir outro browser</strong> en tu smartphone, ...</li><li>Use a função <forte>colar</strong> para continuar.</li></ol>",
        "modal.opensafari.ical.h": "Safari aberto",
        "modal.opensafari.ical.text":
          "Infelizmente, o iOS tem alguns problemas para gerar e abrir o arquivo de calendário fora do Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Safari aberto</strong>, ...</li><li>Use a função <forte>colar</strong> para continuar.</li></ol>",
        "modal.multidate.h": "Esta é uma série de datas",
        "modal.multidate.text":
          "Adicione as datas individuais ao seu calendário, por ordem:",
        "date.status.cancelled": "Esta data foi cancelada.",
        "date.status.cancelled.cta": "Actualize o seu calendário!",
        "modal.subscribe.yahoo.h": "Adicionar calendário ao Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Abrir o calendário do Yahoo.</li><li>Clique no separador "Acções".</li><li>Seleccione "Seguir outros calendários".</li><li>Escolha um nome e cole o URL da sua área de transferência no campo URL.</li></ol>',
        "modal.subscribe.yahoo.button": "Abra o Calendário do Yahoo",
        "modal.crios.google.text":
          "Se estiver usando o aplicativo Google Calendar e ele não estiver aberto em segundo plano, infelizmente, você pode precisar iniciar este processo duas vezes.",
        continue: "Continuar",
        cancel: "Cancelar",
        expired: "Expirada",
        recurring: "Recorrente",
      },
      fr: {
        "label.addtocalendar": "Ajouter à l'Agenda",
        "label.icalfile": "Fichier iCal",
        close: "Fermer",
        "modal.button.default": "Cliquez-moi",
        "modal.webview.ical.h": "Ouvrez votre navigateur",
        "modal.webview.ical.text":
          "Malheureusement, les navigateurs in-app ont des problèmes avec la manière dont nous créons les fichiers d'agenda.",
        "modal.clipboard.text":
          "Nous avons automatiquement copié une URL magique dans votre presse-papiers.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Ouvrez un autre navigateur</strong> sur votre smartphone, ...</li><li><strong>Collez</strong> le contenu du presser-papier et continuez.</li></ol>",
        "modal.opensafari.ical.h": "Ouvrir Safari",
        "modal.opensafari.ical.text":
          "Malheureusement, iOS rencontre des problèmes pour générer et ouvrir le fichier de calendrier en dehors de Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Ouvrez Safari</strong>, ...</li><li><strong>Collez</strong> le contenu du presse-papier et continuez.</li></ol>",
        "modal.multidate.h": "Ceci est un évènement récurrent",
        "modal.multidate.text": "Ajouter les différents évènements un par un:",
        "date.status.cancelled": "Cette date est annulée.",
        "date.status.cancelled.cta": "Actualisez votre agenda!",
        "modal.subscribe.yahoo.h": "Ajouter un agenda à Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Ouvrez l\'Agenda Yahoo.</li><li>Cliquez sur l\'onglet "Actions".</li><li>Sélectionnez "Suivre d\'autres agendas".</li><li>Choisissez un nom et collez le contenu de votre presse-papiers dans le champ URL.</li></ol>',
        "modal.subscribe.yahoo.button": "Ouvrir le calendrier Yahoo",
        "modal.crios.google.text":
          "Si vous utilisez l'application Google Calendar et qu'elle n'est pas déjà ouverte en arrière-plan, malheureusement, il se pourrait que vous deviez lancer ce processus deux fois.",
        continue: "Continuer",
        cancel: "Annuler",
        expired: "Expiré",
        recurring: "Récurrente",
      },
      nl: {
        "label.addtocalendar": "Opslaan in Agenda",
        "label.icalfile": "iCal File",
        close: "Sluiten",
        "modal.button.default": "Klik me",
        "modal.webview.ical.h": "Open uw browser",
        "modal.webview.ical.text":
          "Helaas hebben in-app browsers problemen met de manier waarop wij kalenderbestanden maken.",
        "modal.clipboard.text":
          "We hebben automatisch een magische URL naar je klembord gekopieerd.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Open een andere browser</strong> op uw smartphone, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
        "modal.opensafari.ical.h": "Open Safari",
        "modal.opensafari.ical.text":
          "Helaas heeft iOS enkele problemen met het genereren en openen van het agendabestand buiten Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Open Safari</strong>, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
        "modal.multidate.h": "Dit is een reeks data",
        "modal.multidate.text": "Voeg de afzonderlijke delen één voor één toe:",
        "date.status.cancelled": "Deze datum is geannuleerd.",
        "date.status.cancelled.cta": "Uw agenda bijwerken!",
        "modal.subscribe.yahoo.h": "Toevoegen aan Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Open de Yahoo calendar.</li><li>Klik op de "Acties" tab.</li><li>Selecteer "Volg Andere Agenda\'s".</li><li>Kies een naam en plak de URL van uw klembord in het URL-veld.</li></ol>',
        "modal.subscribe.yahoo.button": "Open Yahoo Agenda",
        "modal.crios.google.text":
          "Als je de Google Calendar-app gebruikt en deze is niet al geopend op de achtergrond, dan zul je helaas mogelijk dit proces twee keer moeten starten.",
        continue: "Doorgaan",
        cancel: "Annuleren",
        expired: "Verlopen",
        recurring: "Terugkerend",
      },
      tr: {
        "label.addtocalendar": "Takvime Ekle",
        "label.icalfile": "iCal Dosyası",
        close: "Kapat",
        "modal.button.default": "Beni tıklayın",
        "modal.webview.ical.h": "Tarayıcınızı açın",
        "modal.webview.ical.text":
          "Ne yazık ki, uygulama içi tarayıcılar takvim dosyalarını oluşturma şeklimizle ilgili sorunlar yaşıyor.",
        "modal.clipboard.text":
          "Panonuza otomatik olarak sihirli bir URL kopyaladık.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Akıllı telefonunuzda başka bir tarayıcı açın</strong>, ...</li><li>Devam etmek için <strong>insert</strong> fonksiyonunu kullanın.</li></ol>",
        "modal.opensafari.ical.h": "Açık Safari",
        "modal.opensafari.ical.text":
          "Ne yazık ki iOS, takvim dosyasını Safari dışında oluştururken ve açarken bazı sorunlar yaşıyor.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Açık Safari</strong>, ...</li><li>Devam etmek için <strong>insert</strong> fonksiyonunu kullanın.</li></ol>",
        "modal.multidate.h": "Bu bir etkinlik serisidir",
        "modal.multidate.text": "Parçaları teker teker ekleyin:",
        "date.status.cancelled": "Bu tarih iptal edildi.",
        "date.status.cancelled.cta": "Lütfen takviminizi güncelleyin!",
        "modal.subscribe.yahoo.h": "Yahoo'ya takvim ekleme",
        "modal.subscribe.yahoo.text":
          '<ol><li>Yahoo takvimini açın.</li><li>"Eylemler" sekmesine tıklayın.</li><li>"Diğer Takvimleri Takip Et" öğesini seçin.</li><li>Bir ad seçin ve URL\'yi panonuzdan URL alanına yapıştırın.</li></ol>',
        "modal.subscribe.yahoo.button": "Yahoo Takvimini aç",
        "modal.crios.google.text":
          "Google Takvim uygulamasını kullanıyorsanız ve zaten arka planda açık değilse, ne yazık ki bu işlemi iki kez başlatmanız gerekebilir.",
        continue: "Devam etmek",
        cancel: "İptal",
        expired: "Günü geçmiş",
        recurring: "Yinelenen",
      },
      zh: {
        "label.addtocalendar": "添加到日历",
        "label.icalfile": "iCal 文件",
        close: "关",
        "modal.button.default": "点我",
        "modal.webview.ical.h": "打开浏览器",
        "modal.webview.ical.text":
          "不幸的是，应用内浏览器在我们生成日历文件的方式上存在问题。",
        "modal.clipboard.text": "我们自动将魔术 URL 复制到您的剪贴板。",
        "modal.webview.ical.steps":
          "<ol><li>打开手机上的任何其他浏览器, ...</li><li>粘贴剪贴板内容并开始。</li></ol>",
        "modal.opensafari.ical.h": "打开 Safari",
        "modal.opensafari.ical.text":
          "不幸的是，iOS 在 Safari 之外生成和打开日历文件时遇到一些问题。",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>打开 Safari</strong>, ...</li><li>粘贴剪贴板内容并开始。</li></ol>",
        "modal.multidate.h": "这是一个活动系列",
        "modal.multidate.text": "逐个添加各个部分:",
        "date.status.cancelled": "此日期已取消。",
        "date.status.cancelled.cta": "请更新您的日历!",
        "modal.subscribe.yahoo.h": "将日历添加到 Yahoo",
        "modal.subscribe.yahoo.text":
          "<ol><li>打开 Yahoo 日历。</li><li>点击“操作”标签。</li><li>选择“关注其他日历”。</li><li>选择一个名称并将剪贴板中的 URL 粘贴到 URL 字段中。</li></ol>",
        "modal.subscribe.yahoo.button": "打开雅虎日历",
        "modal.crios.google.text":
          "如果您正在使用 Google 日历应用，且该应用未在后台打开，很遗憾，您可能需要启动此进程两次。",
        continue: "继续",
        cancel: "中止",
        expired: "已到期",
        recurring: "再次发生的",
      },
      ar: {
        "label.addtocalendar": "إضافة إلى التقويم",
        "label.icalfile": "ملف iCal",
        close: "قريب",
        "modal.button.default": "انقر فوق لي",
        "modal.webview.ical.h": "افتح المستعرض الخاص بك",
        "modal.webview.ical.text":
          "لسوء الحظ ، تواجه المتصفحات داخل التطبيق مشاكل في طريقة إنشاء ملف التقويم.",
        "modal.clipboard.text":
          "قمنا تلقائيًا بنسخ عنوان URL سحري إلى الحافظة الخاصة بك.",
        "modal.webview.ical.steps":
          "<ol><li>افتح أي متصفح آخر على هاتفك الذكي, ...</li><li>.الصق محتوى الحافظة واذهب</li></ol>",
        "modal.opensafari.ical.h": "افتح Safari",
        "modal.opensafari.ical.text":
          "لسوء الحظ ، يواجه iOS بعض المشكلات في إنشاء ملف التقويم وفتحه خارج Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>افتح Safari</strong>, ...</li><li>الصق محتوى الحافظة واذهب.</li></ol>",
        "modal.multidate.h": "هذه سلسلة أحداث",
        "modal.multidate.text": "أضف الأجزاء الفردية واحدة تلو الأخرى:",
        "date.status.cancelled": "تم إلغاء هذا التاريخ.",
        "date.status.cancelled.cta": "الرجاء تحديث التقويم الخاص بك!",
        "modal.subscribe.yahoo.h": "أضف التقويم إلى Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>افتح تقويم Yahoo.</li><li>انقر فوق علامة التبويب "الإجراءات".</li><li>حدد "متابعة تقويمات أخرى".</li><li>اختر اسمًا والصق عنوان URL من الحافظة الخاصة بك في حقل URL.</li></ol>',
        "modal.subscribe.yahoo.button": "افتح تقويم ياهو",
        "modal.crios.google.text":
          "إذا كنت تستخدم تطبيق Google Calendar ولم يكن مفتوحًا بالفعل في الخلفية، فقد تحتاج إلى بدء هذه العملية مرتين على الأقل.",
        continue: "استمر",
        cancel: "إحباط",
        expired: "منتهي الصلاحية",
        recurring: "يتكرر",
      },
      hi: {
        "label.addtocalendar": "कैलेंडर में जोड़ें",
        "label.icalfile": "iCal फ़ाइल",
        close: "बंद करना",
        "modal.button.default": "मुझे क्लिक करें",
        "modal.webview.ical.h": "अपना ब्राउज़र खोलें",
        "modal.webview.ical.text":
          "दुर्भाग्य से, इन-ऐप ब्राउज़र में कैलेंडर फ़ाइल बनाने के तरीके में समस्याएँ हैं।",
        "modal.clipboard.text":
          "हमने आपके क्लिपबोर्ड पर स्वचालित रूप से एक जादुई URL कॉपी कर लिया है।",
        "modal.webview.ical.steps":
          "<ol><li>अपने फ़ोन पर <strong>दूसरा ब्राउज़र खोलें</strong>, ...</li><li>क्लिपबोर्ड सामग्री <strong>चिपकाएं</strong> और जाएं।</li></ol>",
        "modal.opensafari.ical.h": "सफारी खोलें",
        "modal.opensafari.ical.text":
          "दुर्भाग्य से, iOS में सफ़ारी के बाहर कैलेंडर फ़ाइल बनाने और खोलने में कुछ समस्याएँ हैं।",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>सफारी खोलें</strong>, ...</li><li>क्लिपबोर्ड सामग्री <strong>चिपकाएं</strong> और जाएं।</li></ol>",
        "modal.multidate.h": "यह एक इवेंट सीरीज़ है",
        "modal.multidate.text": "अलग-अलग हिस्सों को एक-एक करके जोड़ें:",
        "date.status.cancelled": "यह तिथि रद्द हो गई।",
        "date.status.cancelled.cta": "कृपया अपना कैलेंडर अपडेट करें!",
        "modal.subscribe.yahoo.h": "Yahoo . में कैलेंडर जोड़ें",
        "modal.subscribe.yahoo.text":
          '<ol><li>Yahoo कैलेंडर खोलें।</li><li>"कृती" टैब पर क्लिक करें।</li><li>"इतर कॅलेंडर्सचे अनुसरण करा" चुनें।</li><li>एक नाम चुनें और अपने क्लिपबोर्ड से URL को URL फ़ील्ड में पेस्ट करें।</li></ol>',
        "modal.subscribe.yahoo.button": "याहू कैलेंडर खोलें",
        "modal.crios.google.text":
          "अगर आप Google Calendar एप्लिकेशन का उपयोग कर रहे हैं और यह पहले से ही पृष्ठभूमि में नहीं खुला है, तो दुखद है कि आपको शायद इस प्रक्रिया को दो बार शुरू करने की आवश्यकता हो सकती है।",
        continue: "जारी रखें",
        cancel: "रद्द करना",
        expired: "खत्म हो चुका",
        recurring: "पुनरावर्ती",
      },
      pl: {
        "label.addtocalendar": "Dodaj do kalendarza",
        "label.icalfile": "Plik iCal",
        close: "Zamknij",
        "modal.button.default": "Kliknij mnie",
        "modal.webview.ical.h": "Otwórz przeglądarkę",
        "modal.webview.ical.text":
          "Niestety, przeglądarki in-app mają problemy ze sposobem, w jaki generujemy plik kalendarza.",
        "modal.clipboard.text":
          "Automatycznie skopiowaliśmy magiczny adres URL do schowka.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Otwórz inną przeglądarkę</strong> w swoim telefonie, ...</li><li><strong>Wklej</strong> zawartość schowka i ruszaj.</li></ol>",
        "modal.opensafari.ical.h": "Otwórz Safari",
        "modal.opensafari.ical.text":
          "Niestety iOS ma pewne problemy z generowaniem i otwieraniem pliku kalendarza poza Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Otwórz Safari</strong>, ...</li><li><strong>Wklej</strong> zawartość schowka i ruszaj.</li></ol>",
        "modal.multidate.h": "To jest cykl imprez",
        "modal.multidate.text": "Dodawać po kolei poszczególne części:",
        "date.status.cancelled": "Ta data została odwołana.",
        "date.status.cancelled.cta": "Zaktualizuj swój kalendarz!",
        "modal.subscribe.yahoo.h": "Dodaj kalendarz do Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Otwórz kalendarz Yahoo.</li><li>Kliknij na zakładkę "Czynności".</li><li>Wybierz "Obserwuj inne kalendarze".</li><li>Wybierz nazwę i wklej adres URL ze schowka w polu URL.</li></ol>',
        "modal.subscribe.yahoo.button": "Otwórz kalendarz Yahoo",
        "modal.crios.google.text":
          "Jeśli używasz aplikacji Google Calendar i nie jest ona już otwarta w tle, niestety, może być konieczne dwukrotne uruchomienie tego procesu.",
        continue: "Kontynuować",
        cancel: "Anuluj",
        expired: "Wygasły",
        recurring: "Powtarzający się",
      },
      id: {
        "label.addtocalendar": "Tambahkan ke Kalender",
        "label.icalfile": "File iCal",
        close: "Tutup",
        "modal.button.default": "Klik saya",
        "modal.webview.ical.h": "Buka browser Anda",
        "modal.webview.ical.text":
          "Sayangnya, browser dalam aplikasi memiliki masalah dengan cara kami menghasilkan file kalender.",
        "modal.clipboard.text":
          "Kami telah secara otomatis menyalin URL ajaib ke clipboard Anda.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Buka peramban lain</strong> pada ponsel Anda, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
        "modal.opensafari.ical.h": "Buka Safari",
        "modal.opensafari.ical.text":
          "Sayangnya, iOS memiliki beberapa masalah dalam membuat dan membuka file kalender di luar Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Buka Safari</strong>, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
        "modal.multidate.h": "Ini adalah rangkaian acara",
        "modal.multidate.text": "Tambahkan masing-masing bagian satu per satu:",
        "date.status.cancelled": "Tanggal ini dibatalkan.",
        "date.status.cancelled.cta": "Perbarui kalender Anda!",
        "modal.subscribe.yahoo.h": "Tambahkan kalender ke Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Buka kalender Yahoo.</li><li>Klik pada tab "Tindakan".</li><li>Pilih "Ikuti Kalender Lain".</li><li>Pilih nama dan tempelkan URL dari clipboard Anda ke bidang URL.</li></ol>',
        "modal.subscribe.yahoo.button": "Buka kalender Yahoo",
        "modal.crios.google.text":
          "Jika Anda menggunakan aplikasi Google Calendar dan aplikasi tersebut belum terbuka di latar belakang, sayangnya, Anda mungkin perlu memulai proses ini dua kali.",
        continue: "Lanjutkan",
        cancel: "Batal",
        expired: "Kedaluwarsa",
        recurring: "Berulang",
      },
      no: {
        "label.addtocalendar": "Legg til i kalenderen",
        "label.icalfile": "iCal-fil",
        close: "Lukk",
        "modal.button.default": "Klikk på meg",
        "modal.webview.ical.h": "Åpne nettleseren din",
        "modal.webview.ical.text":
          "Dessverre har nettlesere i appen problemer med måten vi genererer kalenderfilen på.",
        "modal.clipboard.text":
          "Vi kopierte automatisk en magisk URL til utklippstavlen din.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Åpne en annen nettleser</strong> på telefonen, ...</li><li><strong>Lim inn</strong> innholdet på utklippstavlen og gå.</li></ol>",
        "modal.opensafari.ical.h": "Åpne Safari",
        "modal.opensafari.ical.text":
          "Dessverre har iOS noen problemer med å generere og åpne kalenderfilen utenfor Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Åpne Safari</strong>, ...</li><li><strong>Lim inn</strong> innholdet på utklippstavlen og gå.</li></ol>",
        "modal.multidate.h": "Dette er en avtaleserie",
        "modal.multidate.text":
          "Legg til de enkelte datoene i kalenderen din i rekkefølge:",
        "date.status.cancelled": "Denne datoen ble avlyst.",
        "date.status.cancelled.cta": "Oppdater kalenderen din!",
        "modal.subscribe.yahoo.h": "Legg til kalender til Yahoo",
        "modal.subscribe.yahoo.text":
          "<ol><li>Åpne Yahoo-kalenderen.</li><li>Klikk på «Handlinger»-fanen.</li><li>Velg «Følg andre kalendere».</li><li>Velg et navn og lim inn URL-en fra utklippstavlen i URL-feltet.</li></ol>",
        "modal.subscribe.yahoo.button": "Åpne Yahoo-kalenderen",
        "modal.crios.google.text":
          "Hvis du bruker Google Calendar-appen og den ikke allerede er åpen i bakgrunnen, må du dessverre kanskje starte denne prosessen to ganger.",
        continue: "Fortsette",
        cancel: "Avbryt",
        expired: "Utløpt",
        recurring: "Tilbakevendende",
      },
      fi: {
        "label.addtocalendar": "Lisää kalenteriin",
        "label.icalfile": "iCal-tiedosto",
        close: "Sulje",
        "modal.button.default": "Klikkaa minua",
        "modal.webview.ical.h": "Avaa selain",
        "modal.webview.ical.text":
          "Valitettavasti sovelluksen sisäisillä selaimilla on ongelmia kalenteritiedoston luomisessa.",
        "modal.clipboard.text":
          "Olemme automaattisesti kopioineet maagisen URL-osoitteen leikepöydällesi.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Avaa toinen selain</strong> puhelimessasi., ...</li><li><strong>liitä</strong> leikepöydän sisältö ja lähde.</li></ol>",
        "modal.opensafari.ical.h": "Avaa Safari",
        "modal.opensafari.ical.text":
          "Valitettavasti iOS:llä on ongelmia kalenteritiedoston luomisessa ja avaamisessa Safarin ulkopuolella.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Avaa Safari</strong>, ...</li><li><strong>liitä</strong> leikepöydän sisältö ja lähde.</li></ol>",
        "modal.multidate.h": "Tämä on tapahtumasarja",
        "modal.multidate.text": "Lisää yksittäiset osat yksi kerrallaan:",
        "date.status.cancelled": "Tämä päivämäärä peruttiin.",
        "date.status.cancelled.cta": "Päivitä kalenterisi!",
        "modal.subscribe.yahoo.h": "Lisää kalenteri Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Avaa Yahoo-kalenteri.</li><li>Napsauta "Toiminnot"-välilehteä.</li><li>Valitse "Seuraa muiden kalentereita".</li><li>Valitse nimi ja liitä URL-osoite leikepöydältäsi URL-kenttään.</li></ol>',
        "modal.subscribe.yahoo.button": "Avaa Yahoo-kalenteri",
        "modal.crios.google.text":
          "Jos käytät Google Kalenteri -sovellusta eikä se ole jo avoinna taustalla, valitettavasti saatat joutua aloittamaan tämän prosessin kahdesti.",
        continue: "Jatkaa",
        cancel: "Peruuta",
        expired: "Vanhentunut",
        recurring: "Toistuva",
      },
      sv: {
        "label.addtocalendar": "Lägg till i kalender",
        "label.icalfile": "iCal-fil",
        close: "Stäng",
        "modal.button.default": "Klicka på mig",
        "modal.webview.ical.h": "Öppna din webbläsare",
        "modal.webview.ical.text":
          "Tyvärr har webbläsare i appen problem med hur vi genererar kalenderfilen.",
        "modal.clipboard.text":
          "Vi har automatiskt kopierat en magisk URL till ditt klippblock.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Öppna en annan webbläsare</strong> på telefonen, ...</li><li><strong>Insätt</strong> innehållet i klippbordet och kör.</li></ol>",
        "modal.opensafari.ical.h": "Öppna Safari",
        "modal.opensafari.ical.text":
          "Tyvärr har iOS vissa problem med att generera och öppna kalenderfilen utanför Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Öppna Safari</strong>, ...</li><li><strong>Insätt</strong> innehållet i klippbordet och kör.</li></ol>",
        "modal.multidate.h": "Detta är en evenemangsserie",
        "modal.multidate.text": "Lägg till de enskilda delarna en efter en:",
        "date.status.cancelled": "Detta datum har ställts in.",
        "date.status.cancelled.cta": "Uppdatera din kalender!",
        "modal.subscribe.yahoo.h": "Lägg till kalender i Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Öppna Yahoo-kalendern.</li><li>Klicka på fliken "Åtgärder".</li><li>Välj "Följ andra kalendrar".</li><li>Välj ett namn och klistra in URL:en från klippbordet i URL-fältet.</li></ol>',
        "modal.subscribe.yahoo.button": "Öppna Yahoo-kalendern",
        "modal.crios.google.text":
          "Om du använder Google Calendar-appen och den inte redan är öppen i bakgrunden, måste du tyvärr kanske starta denna process två gånger.",
        continue: "Fortsätta",
        cancel: "Avbryt",
        expired: "Utgånget",
        recurring: "Återkommande",
      },
      cs: {
        "label.addtocalendar": "Přidat do kalendáře",
        "label.icalfile": "Soubor iCal",
        close: "Zavřít",
        "modal.button.default": "Klikněte na mě",
        "modal.webview.ical.h": "Otevřete prohlížeč",
        "modal.webview.ical.text":
          "Prohlížeče v aplikacích mají bohužel problémy se způsobem generování souboru kalendáře.",
        "modal.clipboard.text":
          "Do schránky jsme automaticky zkopírovali kouzelnou adresu URL.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Otevření jiného prohlížeče</strong> v telefonu, ...</li><li><strong>Vložte</strong> obsah schránky a přejděte.</li></ol>",
        "modal.opensafari.ical.h": "Otevřít Safari",
        "modal.opensafari.ical.text":
          "Bohužel má iOS nějaké problémy s generováním a otevíráním souboru kalendáře mimo Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Otevřít Safari</strong>, ...</li><li><strong>Vložte</strong> obsah schránky a přejděte.</li></ol>",
        "modal.multidate.h": "Jedná se o sérii událostí",
        "modal.multidate.text": "Přidávejte jednotlivé díly jeden po druhém:",
        "date.status.cancelled": "Toto datum bylo zrušeno.",
        "date.status.cancelled.cta": "Aktualizujte svůj kalendář!",
        "modal.subscribe.yahoo.h": "Přidat kalendář do Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Otevřete kalendář Yahoo.</li><li>Klikněte na kartu "Akce".</li><li>Vyberte možnost "Sledovat další kalendáře".</li><li>Vyberte název a vložte adresu URL ze schránky do pole URL.</li></ol>',
        "modal.subscribe.yahoo.button": "Otevřete kalendář Yahoo",
        "modal.crios.google.text":
          "Pokud používáte aplikaci Google Calendar a není již otevřená na pozadí, bohužel budete pravděpodobně muset tento proces spustit dvakrát.",
        continue: "Pokračovat",
        cancel: "Storno",
        expired: "Platnost vypršela",
        recurring: "Opakující se",
      },
      ja: {
        "label.addtocalendar": "カレンダーに追加",
        "label.icalfile": "iCalファイル",
        close: "閉じる",
        "modal.button.default": "クリックしてください",
        "modal.webview.ical.h": "ブラウザを起動する",
        "modal.webview.ical.text":
          "残念ながら、アプリ内ブラウザは、カレンダーファイルの生成方法に問題があります。",
        "modal.clipboard.text":
          "魔法のURLを自動的にクリップボードにコピーしています。",
        "modal.webview.ical.steps":
          "<ol><li>スマートフォンで別のブラウザを起動する, ...</li><li>クリップボードの内容を貼り付けて行く。</li></ol>",
        "modal.opensafari.ical.h": "オープンSafari",
        "modal.opensafari.ical.text":
          "残念ながら、iOS では、Safari の外でカレンダー ファイルを生成したり開いたりする際にいくつかの問題があります。",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>オープンSafari</strong>, ...</li><li>クリップボードの内容を貼り付けて行く。</li></ol>",
        "modal.multidate.h": "イベントシリーズです",
        "modal.multidate.text": "個々のパーツを一つずつ追加していく:",
        "date.status.cancelled": "この日はキャンセルになりました。",
        "date.status.cancelled.cta": "カレンダーを更新する!",
        "modal.subscribe.yahoo.h": "Yahooにカレンダーを追加する",
        "modal.subscribe.yahoo.text":
          "<ol><li>Yahooカレンダーを開く。</li><li>[実行] タブをクリックします。</li><li>[その他のカレンダーのフォロー] を選択します。</li><li>名前を決めて、クリップボードにあるURLをURL欄に貼り付けます。</li></ol>",
        "modal.subscribe.yahoo.button": "Yahooカレンダーを開く",
        "modal.crios.google.text":
          "Google カレンダーアプリを使用しており、それがバックグラウンドで既に開かれていない場合、残念ながら、このプロセスを2回開始する必要があるかもしれません。",
        continue: "続ける",
        cancel: "キャンセル",
        expired: "期限切れ",
        recurring: "繰り返し",
      },
      it: {
        "label.addtocalendar": "Aggiungi al calendario",
        "label.icalfile": "File iCal",
        close: "Chiudere",
        "modal.button.default": "Clicca su di me",
        "modal.webview.ical.h": "Aprire il browser",
        "modal.webview.ical.text":
          "Purtroppo i browser in-app hanno problemi con il modo in cui generiamo il file del calendario.",
        "modal.clipboard.text":
          "Abbiamo copiato automaticamente un URL magico negli appunti.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Aprire un altro browser</strong> sul cellulare, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
        "modal.opensafari.ical.h": "Aprire Safari",
        "modal.opensafari.ical.text":
          "Sfortunatamente, iOS ha alcuni problemi nella generazione e nell'apertura del file del calendario al di fuori di Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Aprire Safari</strong>, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
        "modal.multidate.h": "Questa è una serie di eventi",
        "modal.multidate.text": "Aggiungere le singole parti una per una:",
        "date.status.cancelled": "La data è stata annullata.",
        "date.status.cancelled.cta": "Aggiornare il calendario!",
        "modal.subscribe.yahoo.h": "Aggiungi il calendario a Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Aprire il calendario di Yahoo.</li><li>Fare clic sulla scheda "Azioni".</li><li>Selezionare "Segui altri calendari".</li><li>Scegliere un nome e incollare l\'URL dagli appunti nel campo URL.</li></ol>',
        "modal.subscribe.yahoo.button": "Apri il calendario di Yahoo",
        "modal.crios.google.text":
          "Se stai utilizzando l'applicazione Google Calendar e non è già aperta in background, purtroppo potrebbe essere necessario avviare questo processo due volte.",
        continue: "Continuare",
        cancel: "Annulla",
        expired: "Scaduta",
        recurring: "Ricorrente",
      },
      ko: {
        "label.addtocalendar": "캘린더에 추가",
        "label.icalfile": "iCal 파일",
        close: "닫다",
        "modal.button.default": "클릭 해주세요",
        "modal.webview.ical.h": "브라우저 열기",
        "modal.webview.ical.text":
          "불행히도 인앱 브라우저는 캘린더 파일을 생성하는 방식에 문제가 있습니다.",
        "modal.clipboard.text": "매직 URL을 클립보드에 자동으로 복사했습니다.",
        "modal.webview.ical.steps":
          "<ol><li>휴대전화에서 다른 브라우저 열기, ...</li><li>클립보드 내용을 붙여넣고 이동합니다.</li></ol>",
        "modal.opensafari.ical.h": "Safari 열기",
        "modal.opensafari.ical.text":
          "안타깝게도 iOS에는 Safari 외부에서 캘린더 파일을 생성하고 여는 데 몇 가지 문제가 있습니다.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Safari 열기</strong>, ...</li><li>클립보드 내용을 붙여넣고 이동합니다.</li></ol>",
        "modal.multidate.h": "이벤트 시리즈입니다",
        "modal.multidate.text": "개별 부품을 하나씩 추가:",
        "date.status.cancelled": "이 날짜는 취소되었습니다.",
        "date.status.cancelled.cta": "캘린더를 업데이트하세요!",
        "modal.subscribe.yahoo.h": "Yahoo에 캘린더 추가",
        "modal.subscribe.yahoo.text":
          '<ol><li>Yahoo 캘린더를 엽니다.</li><li>"동작" 탭을 클릭합니다.</li><li>"다른 일정관리 팔로우"를 선택합니다.</li><li>이름을 선택하고 클립보드의 URL을 URL 필드에 붙여넣습니다.</li></ol>',
        "modal.subscribe.yahoo.button": "야후 캘린더 열기",
        "modal.crios.google.text":
          "Google 캘린더 앱을 사용하고 있고 이미 백그라운드에서 열려 있지 않다면, 안타깝게도 이 프로세스를 두 번 시작해야 할 수 있습니다.",
        continue: "계속하다",
        cancel: "취소",
        expired: "만료됨",
        recurring: "되풀이",
      },
      vi: {
        "label.addtocalendar": "Thêm vào Lịch",
        "label.icalfile": "Tệp iCal",
        close: "Đóng",
        "modal.button.default": "Nhấp vào đây",
        "modal.webview.ical.h": "Mở trình duyệt của bạn",
        "modal.webview.ical.text":
          "Rất tiếc, các trình duyệt trong ứng dụng gặp sự cố với cách chúng tôi tạo tệp lịch.",
        "modal.clipboard.text":
          "Chúng tôi đã tự động sao chép một URL ma thuật vào khay nhớ tạm của bạn.",
        "modal.webview.ical.steps":
          "<ol><li><strong> Mở trình duyệt khác </strong> trên điện thoại của bạn, ...</li><li><strong> Dán </strong> nội dung khay nhớ tạm và bắt đầu.</li></ol>",
        "modal.opensafari.ical.h": "Mở Safari",
        "modal.opensafari.ical.text":
          "Rất tiếc, iOS gặp một số sự cố khi tạo và mở tệp lịch bên ngoài Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Mở Safari</strong>, ...</li><li><strong> Dán </strong> nội dung khay nhớ tạm và bắt đầu.</li></ol>",
        "modal.multidate.h": "Đây là một chuỗi sự kiện",
        "modal.multidate.text": "Thêm từng phần riêng lẻ một:",
        "date.status.cancelled": "Ngày này đã bị hủy.",
        "date.status.cancelled.cta": "Cập nhật lịch của bạn!",
        "modal.subscribe.yahoo.h": "Thêm lịch vào Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Mở Lịch Yahoo.</li><li>Nhấp vào tab "Hành động".</li><li>Chọn "Theo dõi các Lịch khác".</li><li>Chọn tên và dán URL từ khay nhớ tạm của bạn vào trường URL.</li></ol>',
        "modal.subscribe.yahoo.button": "Mở lịch Yahoo",
        "modal.crios.google.text":
          "Nếu bạn đang sử dụng ứng dụng Google Calendar và nó chưa mở trong nền, thì rất tiếc, bạn có thể cần phải bắt đầu quy trình này hai lần.",
        continue: "Tiếp tục",
        cancel: "Hủy bỏ",
        expired: "Hết hạn",
        recurring: "Định kỳ",
      },
      ro: {
        "label.addtocalendar": "Adauga In Calendar",
        "label.icalfile": "Fisier iCal",
        close: "Inchide",
        "modal.button.default": "Apasa-ma",
        "modal.webview.ical.h": "Deschide browserul",
        "modal.webview.ical.text":
          "Din pacate, browserele din aplicatie au probleme cu generarea de fisiere pentru calendar.",
        "modal.clipboard.text":
          "Ti-am copiat automat un URL magic in clipboard",
        "modal.webview.ical.steps":
          "<ol><li><strong>Deschide un alt browser</strong> pe telefonul tau, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>",
        "modal.opensafari.ical.h": "Deschide Safari",
        "modal.opensafari.ical.text":
          "Din păcate, iOS are unele probleme la generarea și deschiderea fișierului calendar în afara Safari.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Deschides Safari</strong>, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>",
        "modal.multidate.h": "Aceasta este o serie de evenimente",
        "modal.multidate.text": "Adauga evenimentele individuale una cate una:",
        "date.status.cancelled": "Aceasta data a fost anulata.",
        "date.status.cancelled.cta": "Te rugam sa-ti updatezi calendarul!",
        "modal.subscribe.yahoo.h": "Adauga Calendar in Yahoo",
        "modal.subscribe.yahoo.text":
          '<ol><li>Deschide acum calendarul Yahoo.</li><li>Apasa pe tab-ul de "Actiuni".</li><li>Apasa "Urmareste alte calendare".</li><li>Seteaza un nume si lipeste continutul din clipboard in casuta cu url.</li></ol>',
        "modal.subscribe.yahoo.button": "Deschideți calendarul Yahoo",
        "modal.crios.google.text":
          "Dacă utilizați aplicația Google Calendar și aceasta nu este deja deschisă în fundal, din păcate, s-ar putea să fie necesar să începeți acest proces de două ori.",
        continue: "Continua",
        cancel: "Anuleaza",
        expired: "Expirat",
        recurring: "Recurente",
      },
      fa: {
        "label.addtocalendar": "افزودن به تقویم",
        "label.icalfile": "پرونده iCal",
        close: "بستن",
        "modal.button.default": "اینجا کلیک کنید",
        "modal.webview.ical.h": "مرورگر خود را باز کنید",
        "modal.webview.ical.text":
          "متاسفانه، مرورگرهای درون برنامه‌ای با نحوه تولید پرونده تقویم مشکل دارند.",
        "modal.clipboard.text":
          "ما به طور خودکار یک نشانی اینترنتی جادویی را در کلیپ‌بورد شما کپی کردیم.",
        "modal.webview.ical.steps":
          "<ol><li><strong>مرورگر دیگری را </strong> در گوشی خود باز کنید، ...</li><li>محتوای کلیپ‌بورد را <strong>Paste</strong> کنید و Go را بزنید که آدرس باز شود.</li></ol>",
        "modal.opensafari.ical.h": "سافاری را باز کنید",
        "modal.opensafari.ical.text":
          "متأسفانه iOS در تولید و باز کردن فایل تقویم خارج از سافاری مشکلاتی دارد.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>سافاری را باز کنید</strong>، ...</li><li>محتوای کلیپ‌بورد را <strong>Paste</strong> کنید و Go را بزنید که آدرس باز شود.</li></ol>",
        "modal.multidate.h": "این یک سری رویداد است",
        "modal.multidate.text": "رویدادهای شخصی را یکی یکی اضافه کنید:",
        "date.status.cancelled": "این تاریخ لغو شد",
        "date.status.cancelled.cta": "لطفا تقویم خود را به‌روز کنید!",
        "modal.subscribe.yahoo.h": "افزودن تقویم به یاهو",
        "modal.subscribe.yahoo.text":
          "<ol><li>اکنون تقویم یاهو را باز کنید.</li><li>روی زبانه «Actions» کلیک کنید.</li><li>روی «Follow Other Calendars» ضربه بزنید.</li><li>یک نام وارد کنید و محتوای کلیپ‌بورد را در قسمت url قرار دهید.</li></ol>",
        "modal.subscribe.yahoo.button": "تقویم یاهو را باز کنید",
        "modal.crios.google.text":
          "اگر از برنامه Google Calendar استفاده می‌کنید و آن در پس‌زمینه باز نشده است، متأسفانه احتمالاً نیاز به دو بار شروع این فرآیند دارید.",
        continue: "ادامه دادن",
        cancel: "لغو",
        expired: "منقضی شده",
      },
      et: {
        "label.addtocalendar": "Lisa kalendrisse",
        "label.icalfile": "iCal fail",
        close: "Sulge",
        "modal.button.default": "Kliki siia",
        "modal.webview.ical.h": "Ava oma veebilehitseja",
        "modal.webview.ical.text":
          "Kahjuks on rakendusesisestel veebilehitsejatel probleeme kalendrifailide loomisega.",
        "modal.clipboard.text":
          "Kalendri veebi aadress on automaatselt kopeeritud sinu lõikelauale.",
        "modal.webview.ical.steps":
          "<ol><li><strong>Ava teine veebilehitseja</strong> oma telefonis, ...</li><li><strong>Kleebi</strong> lõikelaua sisu ning mine sellele lehele.</li></ol>",
        "modal.opensafari.ical.h": "Ava Safari",
        "modal.opensafari.ical.text":
          "Kahjuks on iOS-il probleeme kalendrifaili genereerimise ja avamisega väljaspool Safarit.",
        "modal.opensafari.ical.steps":
          "<ol><li><strong>Ava Safari</strong>, ...</li><li><strong>Kleebi</strong> lõikelaua sisu ning mine sellele lehele.</li></ol>",
        "modal.multidate.h": "See on sündmuste seeria",
        "modal.multidate.text": "Ava üksikud sündmused ükshaaval:",
        "date.status.cancelled": "See kuupäev on tühistatud.",
        "date.status.cancelled.cta": "Palun uuenda oma kalendrit!",
        "modal.subscribe.yahoo.h": "Lisa kalender Yahoo-sse",
        "modal.subscribe.yahoo.text":
          '<ol><li>Ava oma Yahoo kalender.</li><li>Kliki "Actions" vahelehte.</li><li>Vajuta "Follow Other Calendars".</li><li>Määra nimi ning lisa lõikelaua sisu URL (veebi aadressi) väljale.</li></ol>',
        "modal.subscribe.yahoo.button": "Avage Yahoo kalender",
        "modal.crios.google.text":
          "Kui kasutate rakendust Google Calendar ja see pole taustal juba avatud, siis kahjuks võib olla vajalik selle protsessi kahe korra käivitamine.",
        continue: "Jätkama",
        cancel: "Tühista",
        expired: "Aegunud",
      },
    },
    At = Object.keys(zt)
  function B(t, e) {
    return null != e.customLabels &&
      null != e.customLabels["" + t] &&
      "" != e.customLabels["" + t]
      ? n(e.customLabels["" + t])
      : ((t = t), (e = (e = e.language) || "en"), zt["" + e]["" + t] || t)
  }
  let Et = !1,
    t = 0
  const U = [],
    Yt =
      '<div class="atcb-initialized" style="display:none;position:relative;width:fit-content;"></div>'
  if (l()) {
    class Ft extends HTMLElement {
      constructor() {
        super()
        var t = document.createElement("template")
        ;(t.innerHTML = Yt),
          this.attachShadow({ mode: "open", delegateFocus: !0 }),
          this.shadowRoot.append(t.content.cloneNode(!0)),
          (this.loaded = !1),
          (this.initialized = !1),
          (this.data = {}),
          (this.error = !1)
      }
      async connectedCallback() {
        if (
          ((this.debug = this.hasAttribute("debug")),
          null != this.getAttribute("proKey") &&
            "" != this.getAttribute("proKey") &&
            (this.data = Ot(this.getAttribute("proKey"))),
          null == this.data.name || "" == this.data.name)
        )
          try {
            this.data = St(this)
          } catch (t) {
            return void (this.debug && Ct(this.shadowRoot, t))
          } finally {
            ;(this.data.proKey = ""), (this.loaded = !0)
          }
        this.initButton()
      }
      disconnectedCallback() {
        Mt(this.shadowRoot, this.data),
          this.debug &&
            console.log(
              'Add to Calendar Button "' + this.data.identifier + '" destroyed',
            ),
          0 == document.querySelectorAll("add-to-calendar-button").length &&
            (t = 0)
      }
      static get observedAttributes() {
        return G.map((t) => t.toLowerCase()).concat(["instance"])
      }
      attributeChangedCallback(t, e, a) {
        if (
          (null == this.data.proKey || "" == this.data.proKey) &&
          this.loaded
        ) {
          this.debug &&
            this.initialized &&
            console.log(t + `'s value has been changed from ${e} to ` + a),
            Mt(this.shadowRoot, this.data),
            (this.data = {}),
            this.shadowRoot.querySelector(".atcb-initialized").remove()
          t = document.createElement("template")
          ;(t.innerHTML = Yt), this.shadowRoot.append(t.content.cloneNode(!0))
          try {
            this.data = St(this)
          } catch (t) {
            return void (this.debug && Ct(this.shadowRoot, t))
          }
          this.initButton()
        }
      }
      initButton() {
        this.initialized || ((this.initialized = !0), (t += 1)),
          this.identifier && "" != this.identifier
            ? (this.data.identifier = this.identifier)
            : (this.data.identifier &&
                "" != this.data.identifier &&
                (/^[\w\-_]+$/.test(this.data.identifier)
                  ? (this.data.identifier = "atcb-btn-" + this.data.identifier)
                  : ((this.data.identifier = ""),
                    this.debug &&
                      console.warn(
                        "Add to Calendar Button generation: identifier invalid - using auto numbers instead",
                      ))),
              (null != this.data.identifier && "" != this.data.identifier) ||
                (this.data.identifier = "atcb-btn-" + t),
              (this.identifier = this.data.identifier)),
          this.setAttribute("atcb-button-id", this.data.identifier)
        try {
          ;(this.style.visibility = "visible"),
            (this.style.opacity = "1"),
            (this.style.position = "relative"),
            Lt(this.shadowRoot, this.data, this.debug)
        } catch (t) {
          this.debug && Ct(this.shadowRoot, t)
        }
      }
    }
    customElements.get("add-to-calendar-button") ||
      customElements.define("add-to-calendar-button", Ft)
  }
  function St(a) {
    let o = { hideBranding: !0 }
    for (let t = 0; t < G.length; t++) {
      var n,
        i = G["" + t]
      if (a.hasAttribute("" + i)) {
        let e = s(a.getAttribute("" + i).replace(/(\\r\\n|\\n|\\r)/g, ""), !1),
          t
        ;(t = K.includes(i)
          ? "" == e || "true" === e
          : Q.includes(i)
          ? JSON.parse(e)
          : V.includes(i)
          ? ((n = "[" != e.substring(0, 1) ? "[" + e + "]" : e), JSON.parse(n))
          : W.includes(i)
          ? (n = (function () {
              let t = e
              return (
                (e.includes('"') || e.includes("'")) &&
                  (t = e.includes("[")
                    ? e.substring(2, e.length - 2)
                    : e.substring(1, e.length - 1)),
                (t = e.includes("|") ? t : t.replace(/\s/g, ""))
              )
            })()).includes("','")
            ? n.split("','")
            : n.split('","')
          : e),
          (o["" + i] = t)
      }
      i = a.getAttribute("identifier")
      null != i &&
        "" != i &&
        (o.identifier = s(i.replace(/(\\r\\n|\\n|\\r)/g, ""), !1))
    }
    if (!tt(o)) {
      const e = a.innerHTML
      var t = (function () {
        if ("" != e)
          try {
            return JSON.parse(s(e.replace(/(\\r\\n|\\n|\\r)/g, ""), !1))
          } catch (t) {
            throw new Error(
              "Add to Calendar Button generation failed: JSON content provided, but badly formatted (in doubt, try some tool like https://jsonformatter.org/ to validate).\r\nError message: " +
                t,
            )
          }
        return ""
      })()
      if (0 == t.length)
        throw (
          (console.error(o.validationError),
          new Error(
            "Add to Calendar Button generation failed: no data provided or missing required fields - see console logs for details",
          ))
        )
      o = t
    }
    return o
  }
  function Lt(t, e, a = !1) {
    if (et((e = J(e)))) {
      var o = t.querySelector(".atcb-initialized")
      if (
        (O(t, e),
        o.setAttribute("lang", e.language),
        Rt(t, o, e.buttonStyle, e.inline, e.buttonsList, e.customCss),
        Bt(e),
        Nt(t, e),
        Ut(e.proKey, a),
        !e.hidden)
      ) {
        {
          var [n, i, r, o = !1] = [t, o, e, a]
          const l = !!(
            1 === r.options.length ||
            (r.buttonsList && "date" != r.buttonStyle)
          )
          ;(l ? r.options : ["default"]).forEach(function (t) {
            var e = document.createElement("div"),
              a =
                (e.classList.add("atcb-button-wrapper"),
                r.rtl && e.classList.add("atcb-rtl"),
                i.append(e),
                T(e, r.sizes),
                document.createElement("button"))
            a.classList.add("atcb-button"),
              r.disabled &&
                (a.setAttribute("disabled", !0),
                (a.style.cssText =
                  "opacity: .75; cursor: not-allowed; filter: brightness(95%); border-style: dashed;")),
              r.hideTextLabelButton && a.classList.add("atcb-no-text"),
              "click" === r.trigger && a.classList.add("atcb-click"),
              "overlay" === r.listStyle && a.classList.add("atcb-dropoverlay"),
              (a.type = "button"),
              a.setAttribute("aria-expanded", !1),
              e.append(a),
              "date" == r.buttonStyle && lt(r, a),
              l
                ? (a.classList.add("atcb-single"),
                  (e =
                    r.buttonsList && 1 < r.options.length
                      ? r.optionLabels[0]
                      : r.label),
                  c(n, r, a, t, !r.hideIconButton, e, !0),
                  (a.id = r.identifier),
                  r.buttonsList && (a.id = r.identifier + "-" + t))
                : (c(n, r, a, "trigger", !r.hideIconButton, r.label),
                  (e = document.createElement("div")).classList.add(
                    "atcb-dropdown-anchor",
                  ),
                  a.append(e)),
              r.hideCheckmark ||
                r.hideTextLabelButton ||
                r.buttonsList ||
                r.disabled ||
                ((t = document.createElement("div")).classList.add(
                  "atcb-checkmark",
                ),
                (t.innerHTML = f.checkmark),
                a.append(t))
          }),
            o &&
              console.log(
                'Add to Calendar Button "' + r.identifier + '" created',
              )
        }
        !e.hideRichData &&
          e.name &&
          e.dates[0].location &&
          e.dates[0].startDate &&
          st(e, t.host)
      }
      C("initialization", e.identifier, e.identifier)
    } else if (a)
      throw (console.error(e.validationError), new Error(e.validationError))
  }
  function Mt(t, e) {
    v(t), (a = e.identifier), void 0 !== U["" + a] && U["" + a].disconnect()
    var a = document.getElementById("atcb-schema-" + e.identifier)
    a && a.remove(),
      Array.from(t.querySelectorAll(".atcb-debug-error-msg"))
        .concat(Array.from(t.querySelectorAll("style")))
        .concat(Array.from(t.querySelectorAll(".atcb-button-wrapper")))
        .forEach((t) => t.remove()),
      delete S["" + e.identifier]
  }
  function O(t, e) {
    t.host.classList.remove("atcb-dark", "atcb-light", "atcb-bodyScheme")
    e =
      "bodyScheme" == e.lightMode
        ? document.body.classList.contains("atcb-dark") ||
          document.documentElement.classList.contains("atcb-dark")
          ? "dark"
          : "light"
        : e.lightMode
    t.host.classList.add("atcb-" + e)
  }
  function Rt(t, e = null, a = "", o = !1, n = !1, i = "") {
    const r = /[`'"()[\]{}<>\s]/
    var l,
      c,
      d = (function () {
        if (!t.host.hasAttribute("cspnonce")) return null
        if (r.test(t.host.getAttribute("cspnonce")))
          throw new Error("cspnonce input contains forbidden characters.")
        return t.host.getAttribute("cspnonce")
      })()
    document.getElementById("atcb-global-style") ||
      (((c = document.createElement("style")).id = "atcb-global-style"),
      (l = window.innerWidth - document.documentElement.clientWidth),
      (c.innerText =
        ".atcb-modal-no-scroll { overflow-y: hidden !important; -webkit-overflow-scrolling: touch; } body.atcb-modal-no-scroll { padding-right: " +
        l +
        "px; }"),
      d && c.setAttribute("nonce", d),
      document.head.append(c)),
      "" != i && "custom" == a
        ? ((l = document.createElement("link")).setAttribute(
            "rel",
            "stylesheet",
          ),
          l.setAttribute("type", "text/css"),
          l.setAttribute("href", i),
          d && l.setAttribute("nonce", d),
          null == e
            ? ((t.host.style.display = "none"), Dt(l, t, t.host))
            : (((c = document.createElement("div")).style.cssText =
                "width: 150px; height: 40px; border-radius: 200px; background-color: #777; opacity: .3;"),
              t.prepend(c),
              Dt(l, t, e, c, o, n)))
        : ("none" != a &&
            null != _["" + a] &&
            ((i = document.createElement("style")),
            d && i.setAttribute("nonce", d),
            (l = t.host.hasAttribute("styleLight")
              ? ":host { " +
                s(
                  t.host
                    .getAttribute("styleLight")
                    .replace(/(\\r\\n|\\n|\\r)/g, ""),
                  !1,
                ) +
                " }"
              : ""),
            (c = t.host.hasAttribute("styleDark")
              ? ":host(.atcb-dark), :host-context(html.atcb-dark):host(.atcb-bodyScheme), :host-context(body.atcb-dark):host(.atcb-bodyScheme) { " +
                s(
                  t.host
                    .getAttribute("styleDark")
                    .replace(/(\\r\\n|\\n|\\r)/g, ""),
                  !1,
                ) +
                " }"
              : ""),
            (i.innerText = _["" + a] + l + c),
            t.prepend(i)),
          null != e &&
            (o
              ? (e.style.display = "inline-block")
              : n
              ? ((e.style.display = "flex"),
                (e.style.flexWrap = "wrap"),
                (e.style.justifyContent = "center"))
              : (e.style.display = "block")))
  }
  async function Dt(e, t, a, o = null, n = !1, i = !1) {
    t.prepend(e),
      await new Promise((t) => {
        e.onload = t
      }),
      null != o && o.remove(),
      n
        ? (a.style.display = "inline-block")
        : i
        ? ((a.style.display = "flex"),
          (a.style.flexWrap = "wrap"),
          (a.style.justifyContent = "center"))
        : (a.style.display = "block")
  }
  function Ct(t, e) {
    var a
    t.querySelector(".atcb-debug-error-msg") ||
      ((a = document.createElement("div")).classList.add(
        "atcb-debug-error-msg",
      ),
      (a.style.cssText =
        "color: #bf2e2e; font-size: 12px; font-weight: bold; padding: 12px 15px; border: 2px solid #bf2e2e; max-width: 180px; border-radius: 13px;"),
      (a.textContent = e),
      t.append(a))
  }
  function Bt(a) {
    var o = []
    for (let e = 0; e < a.options.length; e++) {
      o[a.options["" + e]] = []
      for (let t = 1; t <= a.dates.length; t++) o[a.options["" + e]].push(0)
    }
    S[a.identifier] = o
  }
  function Ut(t = "", e = !1) {
    Et ||
      ((e = e ? " (version " + H + ")" : ""),
      "" != t
        ? console.log(
            "Add to Calendar PRO script initialized" +
              e +
              " | https://add-to-calendar-pro.com",
          )
        : console.log(
            "%c\nAdd to Calendar Button script initialized" +
              e +
              "\nsee https://add-to-calendar-button.com for details.\n",
            "font-weight: bold;",
          ),
      (Et = !0))
  }
  function Ot(t) {
    /*!
     *  @preserve
     *  PER LICENSE AGREEMENT, YOU ARE NOT ALLOWED TO REMOVE OR CHANGE THIS FUNCTION!
     */
    var e = {}
    return (
      null != t &&
        "" != t &&
        ((e.proKey = t),
        (e.identifier = t),
        console.error(
          "Add to Calendar Button proKey invalid! Falling back to local data...",
        )),
      e
    )
  }
  function Nt(e, a) {
    l() &&
      ("bodyScheme" == a.lightMode &&
        ((U[a.identifier] = new MutationObserver(function (t) {
          t.forEach((t) => {
            "class" === t.attributeName && O(e, a)
          })
        })),
        U[a.identifier].observe(document.documentElement, { attributes: !0 }),
        U[a.identifier].observe(document.body, { attributes: !0 })),
      Et ||
        (document.addEventListener("keyup", Ht),
        document.addEventListener("keydown", _t),
        window.addEventListener("resize", Zt)))
  }
  function Ht(t) {
    var e = (e = document.querySelector('[atcb-button-id="' + S.active + '"]'))
      ? e.shadowRoot
      : null
    e &&
      "Escape" === t.key &&
      (C("closeList", "Ecs Hit", S.active), x(e, "close", "", "", !0))
  }
  function _t(e) {
    o = document.querySelector('[atcb-button-id="' + S.active + '"]')
    var a = (a = document.getElementById(S.active + "-modal-host"))
      ? a.shadowRoot
      : o
      ? o.shadowRoot
      : null
    if (
      a &&
      a.querySelector(".atcb-list") &&
      ("ArrowDown" === e.key || "ArrowUp" === e.key || "Tab" === e.key)
    ) {
      e.preventDefault()
      let t = 0
      var o = a.activeElement,
        n = a.querySelectorAll(".atcb-list-item").length
      o && o.classList.contains("atcb-list-item")
        ? ("ArrowDown" === e.key && o.dataset.optionNumber < n
            ? (t = parseInt(o.dataset.optionNumber) + 1)
            : "Tab" === e.key
            ? (t =
                o.dataset.optionNumber < n
                  ? parseInt(o.dataset.optionNumber) + 1
                  : 1)
            : "ArrowUp" === e.key &&
              1 <= o.dataset.optionNumber &&
              (t = parseInt(o.dataset.optionNumber) - 1),
          0 < t &&
            a
              .querySelector('.atcb-list-item[data-option-number="' + t + '"]')
              .focus())
        : ("ArrowUp" !== e.key
            ? a.querySelector('.atcb-list-item[data-option-number="1"]')
            : a.querySelector('.atcb-list-item[data-option-number="' + n + '"]')
          ).focus()
    }
  }
  function Zt() {
    t = document.querySelector('[atcb-button-id="' + S.active + '"]')
    var t,
      e = (e = document.getElementById(S.active + "-modal-host"))
        ? e.shadowRoot
        : t
        ? t.shadowRoot
        : null
    e && (t = e.querySelector("#atcb-bgoverlay")) && (w(t), yt(e))
  }
})()
