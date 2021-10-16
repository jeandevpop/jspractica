//DATOS

const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

// Funcionalidad
//seleccion de seccion y agregar ul

const sec = document.querySelector("#table");
const ul = document.createElement("ul");
// ul.classList.add("tablel");
sec.append(ul);

//function para aceptar los datos

// nota> hay que refactorizar para k sean 2 funciones y que agrege el fondo

function tablaDatos(datos, vista) {
  for (let game of datos) {
    // const { awayTeam, homeTeam } = game;
    let res;
    function maketable({ awayTeam, homeTeam }) {
      const { team: teamA, points: pointsA } = awayTeam;
      const { team: teamH, points: pointsH } = homeTeam;

      if (awayTeam.isWinner) {
        res = `${teamA} @ ${teamH} points: <b>${pointsA}</b> - ${pointsH}`;
      } else {
        res = `${teamA} @  ${teamH} points: ${pointsA} - <b>${pointsH}</b>`;
      }

      //   console.log(ganador);

      return res;
    }
    maketable(game);
    let li = document.createElement("li");
    li.innerHTML = res;

    ul.append(li);

    // let ganador = game.homeTeam.team === vista ? homeTeam : awayTeam;
    // li.classList.add(ganador.isWinner ? "winner" : "loser");
  }

  function puntoVista(vista) {}

  //   const juegos = [...datos];
  //   const [game] = [...datos];
  //   for (let i = 0; i < game.length; i++) {
  //     const equipoA = game[i].awayTeam;
  //     const equipoH = game[i].homeTeam;
  //     const teamA = equipoA.team;
  //     const pointsA = equipoA.points;
  //     const teamH = equipoH.team;
  //     const pointsH = equipoH.points;
  //     // const [teamA, pointsA] = equipoA;
  //
  //     console.log(res);
  //     // const [awayTeam, homeTeam] = quipos;
  //     // console.log(awayTeam, homeTeam);
  //     // console.log(datos[i]);
  //     // const element = datos[i];
  //     // console.log(game[0].awayTeam);
  //   }
  //   for (const juego of datos) {
  //     const [quipo1, equipo2] = juego;
  //     console.log(equipo2, quipo1), juego;
  //   }
  //   console.log();
}
// tablaDatos(warriorsGames);

const hacertabla = tablaDatos;

function vista(datos, vista) {}
