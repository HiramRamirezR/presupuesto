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
let porcentaje = document.getElementById('porcentaje')
let resumen = document.getElementById('resumen')

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

let gastos = document.querySelectorAll('.btn-danger')

gastos.forEach((gasto) => {
    gasto.addEventListener('click', (e) => {
      let cantidadGasto = Number(prompt('¿Cuánto se gastó?'))

      if (cantidadGasto * 0 != 0) {
        alert('Por favor ingrese un número')
        return
      } else if (cantidadGasto == 0) {
        return
      }

      let targetGasto = e.target.parentElement.parentElement.children[1].id

      let descripcionGasto = prompt('¿Qué actividad fue o en qué se gastó?')

      if (descripcionGasto == null) {
        return
      }

      let elemento = resumen.appendChild(document.createElement('li'))

      let fecha = new Date()
      let dia = fecha.toString().split(' ')[2]
      let mes = fecha.toString().split(' ')[1]
      let year = fecha.toString().split(' ')[3]
      let horas = fecha.toString().split(' ')[4].split(':')[0]
      let minutos = fecha.toString().split(' ')[4].split(':')[1]
      let stamp = `${dia} ${mes} del ${year} a las ${horas}:${minutos}`

      elemento.innerHTML = `${stamp} / ${targetGasto.at(0).toUpperCase()}${targetGasto.slice(1)} gastó $${cantidadGasto} en ${descripcionGasto}`
      elemento.classList.add('gasto')

      // console.log(targetGasto)
      if (targetGasto == 'sociedad-de-socorro') {
        sociedadDeSocorro.innerHTML -= cantidadGasto
      } else if (targetGasto == 'quorum-de-elderes') {
        quorumDeElderes.innerHTML -= cantidadGasto
      } else if (targetGasto == 'primaria') {
        primaria.innerHTML -= cantidadGasto
      } else if (targetGasto == 'mujeres-jovenes') {
        mujeresJovenes.innerHTML -= cantidadGasto
      } else if (targetGasto == 'hombres-jovenes') {
        hombresJovenes.innerHTML -= cantidadGasto
      } else if (targetGasto == 'ja') {
        ja.innerHTML -= cantidadGasto
      } else if (targetGasto == 'escuela-dominical') {
        escuelaDominical.innerHTML -= cantidadGasto
      } else if (targetGasto == 'obispado') {
        obispado.innerHTML -= cantidadGasto
      }
      total.innerHTML -= cantidadGasto
      porcentaje.innerHTML = Math.round((total.innerHTML / presupuesto) * 100) + '%'
    })
})

let ingresos = document.querySelectorAll('.btn-success')

ingresos.forEach((ingreso) => {
  ingreso.addEventListener('click', (e) => {
    let cantidadIngreso = Number(prompt('¿Cuánto se ingresó?'))

    if (cantidadIngreso * 0 != 0) {
      alert('Por favor ingrese un número')
      return
    } else if (cantidadIngreso == 0) {
      return
    }

    let targetIngreso = e.target.parentElement.parentElement.children[1].id
    let descripcionIngreso = prompt('Ingrese una corrección.')

    if (descripcionIngreso == null) {
      return
    }

    let elemento = resumen.appendChild(document.createElement('li'))

    let fecha = new Date()
    let dia = fecha.toString().split(' ')[2]
    let mes = fecha.toString().split(' ')[1]
    let year = fecha.toString().split(' ')[3]
    let horas = fecha.toString().split(' ')[4].split(':')[0]
    let minutos = fecha.toString().split(' ')[4].split(':')[1]
    let stamp = `${dia} ${mes} del ${year} a las ${horas}:${minutos}`

    elemento.innerHTML = `${stamp} / ${targetIngreso.at(0).toUpperCase()}${targetIngreso.slice(1)} devolvió $${cantidadIngreso} - (${descripcionIngreso})`
    elemento.classList.add('ingreso')

    // console.log(targetIngreso)
    if (targetIngreso == 'sociedad-de-socorro') {
      sociedadDeSocorro.innerHTML = parseInt(sociedadDeSocorro.innerHTML) + parseInt(cantidadIngreso)
    } else if (targetIngreso == 'quorum-de-elderes') {
      quorumDeElderes.innerHTML = parseInt(quorumDeElderes.innerHTML) + parseInt(cantidadIngreso)
    } else if (targetIngreso == 'primaria') {
      primaria.innerHTML = parseInt(primaria.innerHTML) + parseInt(cantidadIngreso)
    } else if (targetIngreso == 'mujeres-jovenes') {
      mujeresJovenes.innerHTML = parseInt(mujeresJovenes.innerHTML) + parseInt(cantidadIngreso)
    } else if (targetIngreso == 'hombres-jovenes') {
      hombresJovenes.innerHTML = parseInt(hombresJovenes.innerHTML) + parseInt(cantidadIngreso)
    } else if (targetIngreso == 'ja') {
      ja.innerHTML = parseInt(ja.innerHTML) + parseInt(cantidadIngreso)
    } else if (targetIngreso == 'escuela-dominical') {
      escuelaDominical.innerHTML = parseInt(escuelaDominical.innerHTML) + parseInt(cantidadIngreso)
    } else if (targetIngreso == 'obispado') {
      obispado.innerHTML = parseInt(obispado.innerHTML) + parseInt(cantidadIngreso)
    }
    total.innerHTML = parseInt(total.innerHTML) + parseInt(cantidadIngreso)
    porcentaje.innerHTML = Math.round((total.innerHTML / presupuesto) * 100) + '%'
  })
})
