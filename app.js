let presupuesto = 8885

let asignado = document.getElementById('asignado')

let sociedadDeSocorro = document.getElementById('sociedad-de-socorro')
let quorumDeElderes = document.getElementById('quorum-de-elderes')
let primaria = document.getElementById('primaria')
let mujeresJovenes = document.getElementById('mujeres-jovenes')
let hombresJovenes = document.getElementById('hombres-jovenes')
let ja = document.getElementById('ja')
let escuelaDominical = document.getElementById('escuela-dominical')
let obispado = document.getElementById('obispado')
let total = document.getElementById('total')

asignado.innerHTML = presupuesto

let sociedadDeSocorroPorcentaje = 0.10
let quorumDeElderesPorcentaje = 0.05
let primariaPorcentaje = 0.15
let mujeresJovenesPorcentaje = 0.15
let hombresJovenesPorcentaje = 0.15
let jaPorcentaje = 0.10
let escuelaDominicalPorcentaje = 0.05
let obispadoPorcentaje = 0.25

let sociedadDeSocorroTotal = Math.round(presupuesto * sociedadDeSocorroPorcentaje)
let quorumDeElderesTotal = Math.round(presupuesto * quorumDeElderesPorcentaje)
let primariaTotal = Math.round(presupuesto * primariaPorcentaje)
let mujeresJovenesTotal = Math.round(presupuesto * mujeresJovenesPorcentaje)
let hombresJovenesTotal = Math.round(presupuesto * hombresJovenesPorcentaje)
let jaTotal = Math.round(presupuesto * jaPorcentaje)
let escuelaDominicalTotal = Math.round(presupuesto * escuelaDominicalPorcentaje)
let obispadoTotal = Math.round(presupuesto * obispadoPorcentaje)

sociedadDeSocorro.innerHTML = sociedadDeSocorroTotal
quorumDeElderes.innerHTML = quorumDeElderesTotal
primaria.innerHTML = primariaTotal
mujeresJovenes.innerHTML = mujeresJovenesTotal
hombresJovenes.innerHTML = hombresJovenesTotal
ja.innerHTML = jaTotal
escuelaDominical.innerHTML = escuelaDominicalTotal
obispado.innerHTML = obispadoTotal

let totalCalculo = (sociedadDeSocorroPorcentaje * presupuesto) + (quorumDeElderesPorcentaje * presupuesto) + (primariaPorcentaje * presupuesto) + (mujeresJovenesPorcentaje * presupuesto) + (hombresJovenesPorcentaje * presupuesto) + (jaPorcentaje * presupuesto) + (escuelaDominicalPorcentaje * presupuesto) + (obispadoPorcentaje * presupuesto)
total.innerHTML = totalCalculo

let gastos = document.querySelectorAll('a')

gastos.forEach((gasto) => {
    gasto.addEventListener('click', (e) => {
      let cantidad = prompt('¿Cuánto se gastó?')
      let target = e.target.parentElement.parentElement.children[1].id
      // console.log(target)
      if (target == 'sociedad-de-socorro') {
        sociedadDeSocorro.innerHTML -= cantidad
      } else if (target == 'quorum-de-elderes') {
        quorumDeElderes.innerHTML -= cantidad
      } else if (target == 'primaria') {
        primaria.innerHTML -= cantidad
      } else if (target == 'mujeres-jovenes') {
        mujeresJovenes.innerHTML -= cantidad
      } else if (target == 'hombres-jovenes') {
        hombresJovenes.innerHTML -= cantidad
      } else if (target == 'ja') {
        ja.innerHTML -= cantidad
      } else if (target == 'escuela-dominical') {
        escuelaDominical.innerHTML -= cantidad
      } else if (target == 'obispado') {
        obispado.innerHTML -= cantidad
      }
      total.innerHTML -= cantidad
    })
})
