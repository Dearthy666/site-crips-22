function calcularPorcentagem() {
  var valorInput = document.getElementById('valor').value;
  var parceriaSelect = document.getElementById('parceria').value;
  var porcentagem;

  if (parceriaSelect === 'com') {
    porcentagem = 0.8;
  } else {
    porcentagem = 0.7;
  }

  var resultado = parseFloat(valorInput) * porcentagem;
  document.getElementById('resultado').textContent = 'Resultado: ' + resultado ;

  var radioButtons = document.getElementsByName('valor-padrao');
  radioButtons.forEach(function(radioButton) {
    radioButton.checked = false;
  });
}


function voltarInicio() {
  window.location.href = 'index.html';
}

function atualizarValorPadrao() {
  var radioButtons = document.getElementsByName('valor-padrao');

  var valorInput = document.getElementById('valor');

  radioButtons.forEach(function(radioButton) {
    if (radioButton.checked) {
      valorInput.value = radioButton.value;
    }
  });
}
function calcularPrecos() {
  var qtdFuzil = parseInt(document.getElementById('qtd-fuzil').value);
  var qtdSMG = parseInt(document.getElementById('qtd-smg').value);
  var qtdPT = parseInt(document.getElementById('qtd-pt').value);
  var parceriaSelect = document.getElementById('parceria').value;
  var gerenteSelect = document.getElementById('gerente').value;

  var porcentagem = gerenteSelect === 'sim' ? 0.5 : 0.4;

  var precoFuzil = isNaN(qtdFuzil) ? 0 : (parceriaSelect === 'com' ? 1800 : 2000) * qtdFuzil;
  var precoSMG = isNaN(qtdSMG) ? 0 : (parceriaSelect === 'com' ? 1200 : 1500) * qtdSMG;
  var precoPT = isNaN(qtdPT) ? 0 : (parceriaSelect === 'com' ? 800 : 1000) * qtdPT;

  document.getElementById('preco-fuzil').textContent = 'Preço: R$ ' + precoFuzil.toFixed(2);
  document.getElementById('preco-smg').textContent = 'Preço: R$ ' + precoSMG.toFixed(2);
  document.getElementById('preco-pt').textContent = 'Preço: R$ ' + precoPT.toFixed(2);

  var valorTotal = precoFuzil + precoSMG + precoPT;
  var valorFinal = valorTotal - (valorTotal * porcentagem); // Subtrair o desconto do valor total
  document.getElementById("valor-total").innerHTML = "Valor Total: R$ " + valorFinal.toFixed(2);
}
function calcularTotal() {
  var qtdFuzil = parseInt(document.getElementById('qtd-fuzil').value);
  var qtdSMG = parseInt(document.getElementById('qtd-smg').value);
  var qtdPT = parseInt(document.getElementById('qtd-pt').value);

  var total = qtdFuzil + qtdSMG + qtdPT;

  document.getElementById('total-preco').textContent = 'Valor total: R$ ' + total.toFixed(2);
}

function voltarInicio() {
  window.location.href = "index.html";
}



function abrirMenu() {
  var menu = document.getElementById("menu-parcerias");
  if (menu.classList.contains("menu-parcerias-aberto")) {
    menu.classList.remove("menu-parcerias-aberto");
    menu.classList.add("menu-parcerias-fechado");
    document.querySelector('body').classList.remove('blur');
    overlay.style.display = 'none';
  } else {
    menu.classList.remove("menu-parcerias-fechado");
    menu.classList.add("menu-parcerias-aberto");
    document.querySelector('body').classList.add('blur');
    document.querySelector('.toogle-container').classList.add('blur');
    document.querySelector('.menu-lateral').classList.add('blur');
    overlay.style.display = 'block';

  }
  document.querySelector(".container").classList.add("container-invisivel");
}


function fecharMenu() {
  document.getElementById("menu-parcerias").classList.remove("menu-parcerias-aberto");
  document.getElementById("menu-parcerias").classList.add("menu-parcerias-fechado");
  document.querySelector(".container").classList.remove("container-invisivel");
  document.querySelector(".container").classList.remove(".content");
  document.querySelector('body').classList.remove('blur');
  document.querySelector('.toogle-container').classList.remove('blur');
  document.querySelector(".container").classList.remove("container-invisivel");
  document.querySelector('.menu-lateral').classList.remove('blur');


}

var menuParcerias = document.getElementById('menu-parcerias');
menuParcerias.addEventListener('dragstart', handleDragStart, false);
menuParcerias.addEventListener('drag', handleDrag, false);

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', this.innerHTML);

}
var body2 = document.querySelector('body');
body2.addEventListener('dragover', handleDragOver, false);

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'none';
}

function handleDrag(e) {
  if (e.clientX != 0 && e.clientY != 0) {
    menuParcerias.style.position = 'absolute';
    menuParcerias.style.left = e.clientX + 'px';
    menuParcerias.style.top = e.clientY + 'px';
  }
}



document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var menuItems = document.querySelector('.menu-itens');

  menuToggle.addEventListener('change', function() {
    if (this.checked) {
      menuItems.style.display = 'block';
    } else {
      menuItems.style.display = 'none';
    }
  });
});

const checkbox = document.querySelector('.checkbox');
const body = document.querySelector('body');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
});

$(document).ready(function() {
  var image = $("#image");
  var isMouseDown = false;
  var startAngle = 0;

  image.mousedown(function(event) {
    isMouseDown = true;
    startAngle = getRotationAngle(event.clientX, event.clientY);
  });

  $(document).mousemove(function(event) {
    if (isMouseDown) {
      var currentAngle = getRotationAngle(event.clientX, event.clientY);
      var rotationAngle = (startAngle - currentAngle + 360) % 360;
      image.css("transform", "rotate(" + rotationAngle + "deg)");
    }
  });

  $(document).mouseup(function() {
    isMouseDown = false;
  });

  function getRotationAngle(x, y) {
    var rect = image[0].getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    var deltaX = x - centerX;
    var deltaY = y - centerY;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  }
});







var titulo = document.getElementById('animacao-titulo');
titulo.addEventListener('animationend', function() {
  titulo.classList.remove('animating');
});