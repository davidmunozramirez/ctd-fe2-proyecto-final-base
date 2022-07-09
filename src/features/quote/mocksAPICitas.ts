import { rest } from "msw";
// import { API_URL } from "../app/constants";  // se quejó de la importación ,,,, le cambié las comillas y no sirvió
// tampoco lo mostraba como un error de esLint

const citaAleatoria = {
    quote: "Inflammable means flammable? What a country!",
    character: "Dr. Nick",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
    characterDirection: "Right"
};

const citaPorNombreDeAutor = {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    characterDirection: "Right"
};


const mocksAPICitas = [
  rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {
    const cita = req.url.searchParams.get("character") ? citaPorNombreDeAutor : citaAleatoria;

    return res(ctx.status(200), ctx.json([cita]));
  }),
];

export { citaPorNombreDeAutor, citaAleatoria, mocksAPICitas };