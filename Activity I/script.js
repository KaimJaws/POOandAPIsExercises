
class Estudiante {
    constructor(nombre, apellido, matricula) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.matricula = matricula;
      this.asistencia = 0;
      this.calificacion = 0;
      this.semestre = 1;
      this.notas = [];
    }
  
    matricular() {
      console.log(`${this.nombre} ${this.apellido} se ha matriculado`);
    }
  
    asistir() {
      this.asistencia++;
      console.log(`${this.nombre} ${this.apellido} ha asistido a clase`);
    }
  
    calificar(calificacion) {
      this.calificacion = calificacion;
      console.log(`${this.nombre} ${this.apellido} ha obtenido una calificación de ${calificacion}`);
    }
  
    avanzarSemestre() {
      this.semestre++;
      console.log(`${this.nombre} ${this.apellido} ha avanzado al semestre ${this.semestre}`);
    }
  
    agregarNota(nota) {
      this.notas.push(nota);
      console.log(`${this.nombre} ${this.apellido} ha obtenido una nota de ${nota}`);
    }
  
    calcularNotaPromedio() {
      const sumaNotas = this.notas.reduce((a, b) => a + b, 0);
      const notaPromedio = sumaNotas / this.notas.length;
      console.log(`${this.nombre} ${this.apellido} tiene una nota promedio de ${notaPromedio.toFixed(2)}`);
    }
  }
  
  class ListaEstudiantes {
    constructor() {
      this.estudiantes = [];
    }
  
    agregarEstudiante(estudiante) {
      this.estudiantes.push(estudiante);
    }
  
    mostrarEstudiantes() {
      const lista = document.getElementById('lista-estudiantes');
      lista.innerHTML = '';
      this.estudiantes.forEach((estudiante) => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${estudiante.nombre} ${estudiante.apellido} - Matricula: ${estudiante.matricula}
          <br>
          Semestre: ${estudiante.semestre}
          <br>
          Nota promedio: ${estudiante.notas.length > 0 ? estudiante.notas.reduce((a, b) => a + b, 0) / estudiante.notas.length : 0}
        `;
        lista.appendChild(li);
      });
    }
  }
  
  const listaEstudiantes = new ListaEstudiantes();
  
  const estudiante1 = new Estudiante("Juan", "Pérez", "12345");
  const estudiante2 = new Estudiante("María", "Gómez", "67890");
  const estudiante3 = new Estudiante("Carlos", "López", "34567");
  const estudiante4 = new Estudiante("Ana", "Rodríguez", "90123");
  
  listaEstudiantes.agregarEstudiante(estudiante1);
  listaEstudiantes.agregarEstudiante(estudiante2);
  listaEstudiantes.agregarEstudiante(estudiante3);
  listaEstudiantes.agregarEstudiante(estudiante4);
  
  estudiante1.matricular();
  estudiante1.asistir();
  estudiante1.calificar(8.5);
  estudiante1.avanzarSemestre();
  estudiante1.agregarNota(9.0);
  estudiante1.agregarNota(8.5);
  estudiante1.calcularNotaPromedio();
  
  estudiante2.matricular();
  estudiante2.asistir();
  estudiante2.calificar(9.0);
  estudiante2.avanzarSemestre();
  estudiante2.agregarNota(9.5);
  estudiante2.agregarNota(9.0);
  estudiante2.calcularNotaPromedio();

  listaEstudiantes.mostrarEstudiantes();