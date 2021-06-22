function Get() {
  string = document.molcal.intext.value;
  rexBracket = /\[.+?\]\d+\.?\d*/g;
  rexParenth = /\(.+?\)\d+\.?\d*/g;
  rexelement = /[A-Z][a-z]?\d*\.?\d*/g;
  rexvalue = /\d+\.?\d*/;
  rexBra = /\[.+?\]\d/;
  rexPare = /\(.+?\)\d/;

  if (null != string.match(rexBra)) {
    bracket = string.match(rexBracket);
    h = 0;
    while (null != bracket[h]) {
      var bbba = removebracket(bracket[h]);
      string = string.replace(bracket[h], bbba);
      h++;
    }
  }

  if (null != string.match(rexPare)) {
    parenthesis = string.match(rexParenth);
    i = 0;
    while (null != parenthesis[i]) {
      var bbbb = removebracket(parenthesis[i]);
      string = string.replace(parenthesis[i], bbbb);
      i++;
    }
  }

  element = string.match(rexelement);
  k = 0;
  Value = 0;
  var zzz = 10;
  var ddd = 0;
  while (null != element[k]) {
    if (null != element[k].match(rexvalue)) {
      elementvalue = parseFloat(element[k].match(rexvalue));
      rexsymbol = /[A-Z][a-z]?/;
      Symbol = element[k].match(rexsymbol);
    } else {
      elementvalue = 1;
      Symbol = element[k];
    }
    ddd = Change.call(this, Symbol);
    figeff = Math.floor(ddd * 0.0000001);
    Value += (ddd - figeff * 10000000) * elementvalue;
    zzz = Math.min(zzz, figeff);
    k++;
  }
  yyy = Value * Math.pow(10, zzz);
  xxx = Math.floor(yyy);
  Value = xxx * Math.pow(10, -zzz);
  document.molcal.outtext.value = Value + '  g/mol ';
  document.molcal.outtext2.value = '  ' + zzz + ' ';
  return;
}

function removebracket(aaa) {
  var rexbracketvalue = /\d+\.?\d*/g;
  var rexinnerelement = /[A-Z][a-z]?\d*\.?\d*/g;
  var rexinnerelementvalue = /\d+\.?\d*/;
  var ccc = aaa.match(rexbracketvalue);
  var bracketvalue = parseFloat(RegExp.lastMatch);
  var innerelement = aaa.match(rexinnerelement);
  var j = 0;
  var innerelem = new Array();
  while (null != innerelement[j]) {
    if (null != innerelement[j].match(rexvalue)) {
      var innervalue = parseFloat(innerelement[j].match(rexvalue));
      var realvalue = innervalue * bracketvalue;
      innerelem[j] = innerelement[j].replace(innervalue, realvalue);
    } else {
      innerelem[j] = innerelement[j] + bracketvalue.toString();
    }
    aaa = aaa.replace(innerelement[j], innerelem[j]);
    j++;
  }
  return aaa;
}

function Change(symbol) {
  var atom = 0;
  var figures = 0;
  if (symbol == 'Yb') {
    atom = 173.04;
    figures = 2;
  } else if (symbol == 'In') {
    atom = 114.818;
    figures = 3;
  } else if (symbol == 'Cu') {
    atom = 63.546;
    figures = 3;
  } else if (symbol == 'Ce') {
    atom = 140.116;
    figures = 3;
  } else if (symbol == 'Y') {
    atom = 88.90585;
    figures = 5;
  } else if (symbol == 'La') {
    atom = 138.9055;
    figures = 4;
  } else if (symbol == 'Ag') {
    atom = 107.8682;
    figures = 4;
  } else if (symbol == 'Au') {
    atom = 196.9665;
    figures = 4;
  } else if (symbol == 'Ga') {
    atom = 69.723;
    figures = 3;
  } else if (symbol == 'Ge') {
    atom = 72.61;
    figures = 2;
  } else if (symbol == 'O') {
    atom = 15.9994;
    figures = 4;
  } else if (symbol == 'S') {
    atom = 32.066;
    figures = 3;
  } else if (symbol == 'Al') {
    atom = 26.98153;
    figures = 5;
  } else if (symbol == 'Si') {
    atom = 28.0855;
    figures = 4;
  } else if (symbol == 'Lu') {
    atom = 174.967;
    figures = 3;
  } else if (symbol == 'Na') {
    atom = 22.98977;
    figures = 5;
  } else if (symbol == 'K') {
    atom = 39.0983;
    figures = 4;
  } else if (symbol == 'Ti') {
    atom = 47.867;
    figures = 3;
  } else if (symbol == 'V') {
    atom = 50.9415;
    figures = 4;
  } else if (symbol == 'Cr') {
    atom = 51.9961;
    figures = 4;
  } else if (symbol == 'Mn') {
    atom = 54.93804;
    figures = 5;
  } else if (symbol == 'Fe') {
    atom = 55.845;
    figures = 3;
  } else if (symbol == 'Co') {
    atom = 58.9332;
    figures = 5;
  } else if (symbol == 'Ni') {
    atom = 58.6934;
    figures = 4;
  } else if (symbol == 'Zn') {
    atom = 65.39;
    figures = 2;
  } else if (symbol == 'Zr') {
    atom = 91.224;
    figures = 3;
  } else if (symbol == 'Nb') {
    atom = 92.90638;
    figures = 5;
  } else if (symbol == 'Mo') {
    atom = 95.94;
    figures = 2;
  } else if (symbol == 'Ru') {
    atom = 101.07;
    figures = 2;
  } else if (symbol == 'Rh') {
    atom = 102.9055;
    figures = 4;
  } else if (symbol == 'Pd') {
    atom = 106.42;
    figures = 2;
  } else if (symbol == 'Cd') {
    atom = 112.411;
    figures = 3;
  } else if (symbol == 'Mg') {
    atom = 24.305;
    figures = 4;
  } else if (symbol == 'Ca') {
    atom = 40.078;
    figures = 3;
  } else if (symbol == 'Sc') {
    atom = 44.95591;
    figures = 5;
  } else if (symbol == 'Cl') {
    atom = 35.4527;
    figures = 4;
  } else if (symbol == 'Br') {
    atom = 79.904;
    figures = 3;
  } else if (symbol == 'I') {
    atom = 126.9044;
    figures = 4;
  } else if (symbol == 'Sn') {
    atom = 118.71;
    figures = 3;
  } else if (symbol == 'Pb') {
    atom = 207.2;
    figures = 1;
  } else if (symbol == 'Bi') {
    atom = 208.9803;
    figures = 4;
  } else if (symbol == 'H') {
    atom = 1.00794;
    figures = 5;
  } else if (symbol == 'Li') {
    atom = 6.941;
    figures = 3;
  } else if (symbol == 'Rb') {
    atom = 85.4678;
    figures = 4;
  } else if (symbol == 'Sr') {
    atom = 87.62;
    figures = 2;
  } else if (symbol == 'Cs') {
    atom = 132.9054;
    figures = 4;
  } else if (symbol == 'Ba') {
    atom = 137.327;
    figures = 3;
  } else if (symbol == 'Pr') {
    atom = 140.9076;
    figures = 4;
  } else if (symbol == 'Nd') {
    atom = 144.24;
    figures = 2;
  } else if (symbol == 'Sm') {
    atom = 150.36;
    figures = 2;
  } else if (symbol == 'Eu') {
    atom = 151.964;
    figures = 3;
  } else if (symbol == 'Gd') {
    atom = 157.25;
    figures = 2;
  } else if (symbol == 'Tb') {
    atom = 158.9253;
    figures = 4;
  } else if (symbol == 'Dy') {
    atom = 162.5;
    figures = 2;
  } else if (symbol == 'Ho') {
    atom = 164.9303;
    figures = 4;
  } else if (symbol == 'Er') {
    atom = 167.26;
    figures = 2;
  } else if (symbol == 'Tm') {
    atom = 168.9342;
    figures = 4;
  } else if (symbol == 'P') {
    atom = 30.97376;
    figures = 5;
  } else if (symbol == 'As') {
    atom = 74.9216;
    figures = 5;
  } else if (symbol == 'Se') {
    atom = 78.96;
    figures = 2;
  } else if (symbol == 'Sb') {
    atom = 121.76;
    figures = 3;
  } else if (symbol == 'Te') {
    atom = 127.6;
    figures = 2;
  } else if (symbol == 'Hf') {
    atom = 178.49;
    figures = 2;
  } else if (symbol == 'Ta') {
    atom = 180.9479;
    figures = 4;
  } else if (symbol == 'W') {
    atom = 183.84;
    figures = 2;
  } else if (symbol == 'Re') {
    atom = 186.207;
    figures = 3;
  } else if (symbol == 'Os') {
    atom = 190.23;
    figures = 2;
  } else if (symbol == 'Ir') {
    atom = 192.217;
    figures = 3;
  } else if (symbol == 'Pt') {
    atom = 195.078;
    figures = 3;
  } else if (symbol == 'Hg') {
    atom = 200.59;
    figures = 2;
  } else if (symbol == 'Tl') {
    atom = 204.3833;
    figures = 4;
  } else if (symbol == 'C') {
    atom = 12.0107;
    figures = 4;
  } else if (symbol == 'B') {
    atom = 10.811;
    figures = 3;
  } else if (symbol == 'Be') {
    atom = 9.012182;
    figures = 6;
  } else if (symbol == 'N') {
    atom = 14.00674;
    figures = 5;
  } else if (symbol == 'F') {
    atom = 18.9984;
    figures = 5;
  } else if (symbol == 'Th') {
    atom = 232.0381;
    figures = 4;
  } else if (symbol == 'Pa') {
    atom = 231.0358;
    figures = 4;
  } else if (symbol == 'U') {
    atom = 238.0289;
    figures = 4;
  } else if (symbol == 'He') {
    atom = 4.002602;
    figures = 6;
  } else if (symbol == 'Ne') {
    atom = 20.1797;
    figures = 4;
  } else if (symbol == 'Ar') {
    atom = 39.948;
    figures = 3;
  } else if (symbol == 'Kr') {
    atom = 83.8;
    figures = 2;
  } else if (symbol == 'Xe') {
    atom = 131.29;
    figures = 2;
  } else {
    atom = 10000;
    figures = 1;
  }
  return atom + figures * Math.pow(10, 7);
}
