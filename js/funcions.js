function generarGraficoGastosEmpresa(datos) {
    new Chartist.Bar("#Grafico",
      {
        labels: ["Logística", "Renta", "Suplidores", "Impuestos", "MantenimientoMobiliario", "Nómina"],
        series: [datos],
      },
      {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: false,
        axisY: {
          offset: 70,
        },
      }
    );
}

window.addEventListener("submit", (e) => {
    e.preventDefault();
    let gastosEmpresa = new Array();
    let logistica = document.querySelector('#Logistica');
    let renta = document.querySelector('#Renta');
    let suplidores = document.querySelector('#Suplidores');
    let impuestos = document.querySelector('#Impuestos');
    let mantenimientoMobiliario = document.querySelector('#MantenimientoMobiliario');
    let nomina = document.querySelector('#Nomina');

    gastosEmpresa[0] = logistica.value;
    gastosEmpresa[1] = renta.value;
    gastosEmpresa[2] = suplidores.value;
    gastosEmpresa[3] = impuestos.value;
    gastosEmpresa[4] = mantenimientoMobiliario.value;
    gastosEmpresa[5] = nomina.value;
    
    generarGraficoGastosEmpresa(gastosEmpresa);
});

/*window.onload = (event) => {
  new Chartist.Bar(
    "#Grafico",
    {
      labels: ["Organismos Acad. Comunes", "Grado y Tenico superior"],
      series: [[47983, 148642]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );

  /*new Chartist.Bar(
    "#teacher",
    {
      labels: ["Tiempo Completo", "Medio Tiempo", "Por Hora"],
      series: [[188, 69, 2909]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );

  new Chartist.Bar(
    "#egresados",
    {
      labels: ["Grado", "Postgrado"],
      series: [[6579, 3443]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );

  new Chartist.Bar(
    "#research",
    {
      labels: ["Finalizados", "En Ejecución"],
      series: [[10, 276]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );
};*/
