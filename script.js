/* =========================================================
   Mäe Autoteenindus – demo site script
   1. Translations (ET / EN)
   2. Language switch
   3. Number plate box in the hero
   4. Booking form
   ========================================================= */

/* ---------- 1. Translations ----------
   Every element with data-i18n="key" gets its text from here.
   To add a language, copy the "en" block and translate it. */
const translations = {
  et: {
    nav_prices: "Hinnad", nav_book: "Broneeri", nav_contact: "Kontakt", call: "Helista",
    hero_title: "Autoremont Tartus. Vaba aeg juba homme.",
    hero_lead: "Hooldus, rehvid, pidurid ja diagnostika. Ütleme hinna enne töö algust, et arve ei tuleks üllatusena.",
    plate_label: "Sisesta oma auto numbrimärk",
    plate_button: "Broneeri aeg",
    plate_hint: "Leiame sinu autole sobiva aja ja helistame tagasi.",
    fact_open: "Avatud", fact_open_v: "E–R 8–18, L 10–15", fact_where: "Asukoht", fact_phone: "Telefon",
    prices_title: "Hinnad",
    prices_intro: "Hinnad sisaldavad tööd. Varuosad lisanduvad ja enne nende tellimist küsime alati sinu nõusolekut.",
    col_service: "Teenus", col_time: "Aega kulub", col_price: "Hind", from: "alates",
    s_oil: "Õli- ja filtrivahetus", s_tyres: "Rehvivahetus (4 ratast)", s_diag: "Veakoodide lugemine ja diagnostika",
    s_brakes: "Piduriklotside vahetus (üks telg)", s_ac: "Kliimaseadme hooldus", s_inspect: "Ettevalmistus ülevaatuseks",
    s_service: "Hooldus tehase graafiku järgi", s_other: "Midagi muud",
    t_30: "30 min", t_40: "40 min", t_45: "45 min", t_60: "1 h", t_2h: "2 h",
    steps_title: "Kuidas see käib",
    step1_t: "Saada broneering", step1_p: "Numbrimärk, teenus ja sobiv päev. Võtab minuti.",
    step2_t: "Helistame tagasi", step2_p: "Sama tööpäeva jooksul kinnitame kellaaja ja ütleme hinna.",
    step3_t: "Too auto meile", step3_p: "Kui leiame midagi lisaks, helistame enne, kui seda parandame.",
    book_title: "Broneeri aeg",
    f_plate: "Numbrimärk", f_service: "Teenus", f_choose: "Vali teenus", f_name: "Nimi", f_phone: "Telefon",
    f_date: "Sobiv päev", f_note: "Mis autoga juhtus? (pole kohustuslik)", f_submit: "Saada broneering",
    err_missing: "Täida punasega märgitud väljad: numbrimärk, teenus, nimi ja telefon.",
    done_title: "Broneering saadetud",
    done_text: "Helistame sulle tööpäeva jooksul ja lepime kellaaja kokku.",
    contact_title: "Kontakt", hours_title: "Lahtiolekuajad",
    d_weekdays: "Esmaspäev–reede", d_sat: "Laupäev", d_sun: "Pühapäev", closed: "Suletud",
    demo_note: "Näidisleht. Ettevõte, aadress ja hinnad on välja mõeldud."
  },
  en: {
    nav_prices: "Prices", nav_book: "Book", nav_contact: "Contact", call: "Call us",
    hero_title: "Car repair in Tartu. Free slots from tomorrow.",
    hero_lead: "Servicing, tyres, brakes and diagnostics. We tell you the price before we start, so the bill is never a surprise.",
    plate_label: "Enter your number plate",
    plate_button: "Book a time",
    plate_hint: "We'll find a time that suits your car and call you back.",
    fact_open: "Open", fact_open_v: "Mon–Fri 8–18, Sat 10–15", fact_where: "Location", fact_phone: "Phone",
    prices_title: "Prices",
    prices_intro: "Prices include labour. Parts are extra, and we always ask before ordering them.",
    col_service: "Service", col_time: "Takes", col_price: "Price", from: "from",
    s_oil: "Oil and filter change", s_tyres: "Tyre change (4 wheels)", s_diag: "Fault code reading and diagnostics",
    s_brakes: "Brake pad change (one axle)", s_ac: "Air conditioning service", s_inspect: "Pre-inspection check",
    s_service: "Scheduled maintenance", s_other: "Something else",
    t_30: "30 min", t_40: "40 min", t_45: "45 min", t_60: "1 h", t_2h: "2 h",
    steps_title: "How it works",
    step1_t: "Send a booking", step1_p: "Number plate, service and a day that suits you. Takes a minute.",
    step2_t: "We call you back", step2_p: "Within the same working day we confirm the time and the price.",
    step3_t: "Bring the car in", step3_p: "If we find anything else, we call you before fixing it.",
    book_title: "Book a time",
    f_plate: "Number plate", f_service: "Service", f_choose: "Choose a service", f_name: "Name", f_phone: "Phone",
    f_date: "Preferred day", f_note: "What's wrong with the car? (optional)", f_submit: "Send booking",
    err_missing: "Fill in the fields marked in red: number plate, service, name and phone.",
    done_title: "Booking sent",
    done_text: "We'll call you within a working day to agree on a time.",
    contact_title: "Contact", hours_title: "Opening hours",
    d_weekdays: "Monday–Friday", d_sat: "Saturday", d_sun: "Sunday", closed: "Closed",
    demo_note: "Demo site. The business, address and prices are made up."
  }
};

let currentLang = "et";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = translations[lang][el.dataset.i18n];
    if (text) el.textContent = text;
  });

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  try { localStorage.setItem("lang", lang); } catch (e) { /* storage not available, that's fine */ }
}

/* ---------- 2. Language switch ---------- */
document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// Remember the visitor's last choice
try {
  const saved = localStorage.getItem("lang");
  if (saved && translations[saved]) setLanguage(saved);
} catch (e) { /* ignore */ }

/* ---------- 3. Number plate box ---------- */
// Keep plates tidy: capitals, letters/numbers/one space only
function cleanPlate(value) {
  return value.toUpperCase().replace(/[^A-Z0-9ÕÄÖÜŠŽ ]/g, "").replace(/\s+/g, " ").slice(0, 8);
}

const plateInput = document.getElementById("plateInput");
const bookingPlate = document.getElementById("bPlate");

[plateInput, bookingPlate].forEach((input) => {
  input.addEventListener("input", () => { input.value = cleanPlate(input.value); });
});

// Hero form: copy the plate into the booking form and jump there
document.getElementById("plateForm").addEventListener("submit", (event) => {
  event.preventDefault();
  bookingPlate.value = plateInput.value.trim();
  document.getElementById("broneeri").scrollIntoView();
  // Put the cursor on the next empty field so the visitor can keep typing
  const next = bookingPlate.value ? document.getElementById("bService") : bookingPlate;
  next.focus({ preventScroll: true });
});

/* ---------- 4. Booking form ----------
   In this demo nothing is actually sent. For a real client, connect the form
   to a service like Formspree or Netlify Forms so bookings arrive by email. */
const bookingForm = document.getElementById("bookingForm");
const formError = document.getElementById("formError");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const required = bookingForm.querySelectorAll("[required]");
  let firstMissing = null;

  required.forEach((field) => {
    const missing = field.value.trim() === "";
    field.setAttribute("aria-invalid", missing ? "true" : "false");
    if (missing && !firstMissing) firstMissing = field;
  });

  if (firstMissing) {
    formError.textContent = translations[currentLang].err_missing;
    formError.hidden = false;
    firstMissing.focus();
    return;
  }

  formError.hidden = true;
  bookingForm.hidden = true;
  const done = document.getElementById("bookingDone");
  done.hidden = false;
  done.focus();
});

// Don't allow picking a day in the past
document.getElementById("bDate").min = new Date().toISOString().split("T")[0];
