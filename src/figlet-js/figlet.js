/**
 * Figlet JS
 *
 * Copyright (c) 2010 Scott González
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://github.com/scottgonzalez/figlet-js
 */

// (function() {
//   var Figlet = ((typeof exports !== "undefined" ? exports : window).Figlet = {
// import * as speed from "./fonts/speed.flf";

// import * as 3-d from 3-d.flf
// import * as 3x5 from 3x5.flf
// import * as 5lineoblique from 5lineoblique.flf
// import * as 3-d from "./fonts/3-d.flf"
// import * as 3x5 from "./fonts/3x5.flf"
// import * as 5lineoblique from "./fonts/5lineoblique.flf"
import * as acrobatic from "./fonts/acrobatic.flf";
import * as alligator2 from "./fonts/alligator2.flf";
import * as alligator from "./fonts/alligator.flf";
import * as alphabet from "./fonts/alphabet.flf";
import * as avatar from "./fonts/avatar.flf";
import * as banner3D from "./fonts/banner3-D.flf";
import * as banner3 from "./fonts/banner3.flf";
import * as banner4 from "./fonts/banner4.flf";
import * as banner from "./fonts/banner.flf";
import * as barbwire from "./fonts/barbwire.flf";
import * as basic from "./fonts/basic.flf";
import * as bell from "./fonts/bell.flf";
import * as bigchief from "./fonts/bigchief.flf";
import * as big from "./fonts/big.flf";
import * as binary from "./fonts/binary.flf";
import * as block from "./fonts/block.flf";
import * as bubble from "./fonts/bubble.flf";
import * as bulbhead from "./fonts/bulbhead.flf";
import * as calgphy2 from "./fonts/calgphy2.flf";
import * as caligraphy from "./fonts/caligraphy.flf";
import * as catwalk from "./fonts/catwalk.flf";
import * as chunky from "./fonts/chunky.flf";
import * as coinstak from "./fonts/coinstak.flf";
import * as colossal from "./fonts/colossal.flf";
import * as computer from "./fonts/computer.flf";
import * as contessa from "./fonts/contessa.flf";
import * as contrast from "./fonts/contrast.flf";
import * as cosmic from "./fonts/cosmic.flf";
import * as cosmike from "./fonts/cosmike.flf";
import * as cricket from "./fonts/cricket.flf";
import * as cursive from "./fonts/cursive.flf";
import * as cyberlarge from "./fonts/cyberlarge.flf";
import * as cybermedium from "./fonts/cybermedium.flf";
import * as cybersmall from "./fonts/cybersmall.flf";
import * as diamond from "./fonts/diamond.flf";
import * as digital from "./fonts/digital.flf";
import * as doh from "./fonts/doh.flf";
import * as doom from "./fonts/doom.flf";
import * as dotmatrix from "./fonts/dotmatrix.flf";
import * as drpepper from "./fonts/drpepper.flf";
import * as eftichess from "./fonts/eftichess.flf";
import * as eftifont from "./fonts/eftifont.flf";
import * as eftipiti from "./fonts/eftipiti.flf";
import * as eftirobot from "./fonts/eftirobot.flf";
import * as eftitalic from "./fonts/eftitalic.flf";
import * as eftiwall from "./fonts/eftiwall.flf";
import * as eftiwater from "./fonts/eftiwater.flf";
import * as epic from "./fonts/epic.flf";
import * as fender from "./fonts/fender.flf";
import * as fourtops from "./fonts/fourtops.flf";
import * as fuzzy from "./fonts/fuzzy.flf";
import * as goofy from "./fonts/goofy.flf";
import * as gothic from "./fonts/gothic.flf";
import * as graffiti from "./fonts/graffiti.flf";
import * as hollywood from "./fonts/hollywood.flf";
import * as invita from "./fonts/invita.flf";
import * as isometric1 from "./fonts/isometric1.flf";
import * as isometric2 from "./fonts/isometric2.flf";
import * as isometric3 from "./fonts/isometric3.flf";
import * as isometric4 from "./fonts/isometric4.flf";
import * as italic from "./fonts/italic.flf";
import * as ivrit from "./fonts/ivrit.flf";
import * as jazmine from "./fonts/jazmine.flf";
import * as jerusalem from "./fonts/jerusalem.flf";
import * as katakana from "./fonts/katakana.flf";
import * as kban from "./fonts/kban.flf";
import * as larry3d from "./fonts/larry3d.flf";
import * as lcd from "./fonts/lcd.flf";
import * as lean from "./fonts/lean.flf";
import * as letters from "./fonts/letters.flf";
import * as linux from "./fonts/linux.flf";
import * as lockergnome from "./fonts/lockergnome.flf";
import * as madrid from "./fonts/madrid.flf";
import * as marquee from "./fonts/marquee.flf";
import * as maxfour from "./fonts/maxfour.flf";
import * as mike from "./fonts/mike.flf";
import * as mini from "./fonts/mini.flf";
import * as mirror from "./fonts/mirror.flf";
import * as mnemonic from "./fonts/mnemonic.flf";
import * as morse from "./fonts/morse.flf";
import * as moscow from "./fonts/moscow.flf";
import * as nancyjfancy from "./fonts/nancyj-fancy.flf";
import * as nancyj from "./fonts/nancyj.flf";
import * as nancyjunderlined from "./fonts/nancyj-underlined.flf";
import * as nipples from "./fonts/nipples.flf";
import * as ntgreek from "./fonts/ntgreek.flf";
import * as o8 from "./fonts/o8.flf";
import * as ogre from "./fonts/ogre.flf";
import * as pawp from "./fonts/pawp.flf";
import * as peaks from "./fonts/peaks.flf";
import * as pebbles from "./fonts/pebbles.flf";
import * as pepper from "./fonts/pepper.flf";
import * as poison from "./fonts/poison.flf";
import * as puffy from "./fonts/puffy.flf";
import * as pyramid from "./fonts/pyramid.flf";
import * as relief2 from "./fonts/relief2.flf";
import * as relief from "./fonts/relief.flf";
import * as rev from "./fonts/rev.flf";
import * as roman from "./fonts/roman.flf";
import * as rot13 from "./fonts/rot13.flf";
import * as rounded from "./fonts/rounded.flf";
import * as rowancap from "./fonts/rowancap.flf";
import * as rozzo from "./fonts/rozzo.flf";
import * as runic from "./fonts/runic.flf";
import * as runyc from "./fonts/runyc.flf";
import * as sblood from "./fonts/sblood.flf";
import * as script from "./fonts/script.flf";
import * as serifcap from "./fonts/serifcap.flf";
import * as shadow from "./fonts/shadow.flf";
import * as short from "./fonts/short.flf";
import * as slant from "./fonts/slant.flf";
import * as slide from "./fonts/slide.flf";
import * as slscript from "./fonts/slscript.flf";
import * as small from "./fonts/small.flf";
import * as smisome1 from "./fonts/smisome1.flf";
import * as smkeyboard from "./fonts/smkeyboard.flf";
import * as smscript from "./fonts/smscript.flf";
import * as smshadow from "./fonts/smshadow.flf";
import * as smslant from "./fonts/smslant.flf";
import * as smtengwar from "./fonts/smtengwar.flf";
import * as speed from "./fonts/speed.flf";
import * as stampatello from "./fonts/stampatello.flf";
import * as standard from "./fonts/standard.flf";
import * as starwars from "./fonts/starwars.flf";
import * as stellar from "./fonts/stellar.flf";
import * as stop from "./fonts/stop.flf";
import * as straight from "./fonts/straight.flf";
import * as tanja from "./fonts/tanja.flf";
import * as tengwar from "./fonts/tengwar.flf";
import * as term from "./fonts/term.flf";
import * as thick from "./fonts/thick.flf";
import * as thin from "./fonts/thin.flf";
import * as threepoint from "./fonts/threepoint.flf";
import * as ticks from "./fonts/ticks.flf";
import * as ticksslant from "./fonts/ticksslant.flf";
import * as tinkertoy from "./fonts/tinker-toy.flf";
import * as tombstone from "./fonts/tombstone.flf";
import * as trek from "./fonts/trek.flf";
import * as tsalagi from "./fonts/tsalagi.flf";
import * as twopoint from "./fonts/twopoint.flf";
import * as univers from "./fonts/univers.flf";
import * as usaflag from "./fonts/usaflag.flf";
import * as wavy from "./fonts/wavy.flf";
import * as weird from "./fonts/weird.flf";

export class Figlet {
  fonts = {
    //   3-d : 3-d,
    // 3x5 : 3x5,
    // 5lineoblique : 5lineoblique,
    acrobatic: acrobatic,
    alligator2: alligator2,
    alligator: alligator,
    alphabet: alphabet,
    avatar: avatar,
    banner3D: banner3D,
    banner3: banner3,
    banner4: banner4,
    banner: banner,
    barbwire: barbwire,
    basic: basic,
    bell: bell,
    bigchief: bigchief,
    big: big,
    binary: binary,
    block: block,
    bubble: bubble,
    bulbhead: bulbhead,
    calgphy2: calgphy2,
    caligraphy: caligraphy,
    catwalk: catwalk,
    chunky: chunky,
    coinstak: coinstak,
    colossal: colossal,
    computer: computer,
    contessa: contessa,
    contrast: contrast,
    cosmic: cosmic,
    cosmike: cosmike,
    cricket: cricket,
    cursive: cursive,
    cyberlarge: cyberlarge,
    cybermedium: cybermedium,
    cybersmall: cybersmall,
    diamond: diamond,
    digital: digital,
    doh: doh,
    doom: doom,
    dotmatrix: dotmatrix,
    drpepper: drpepper,
    eftichess: eftichess,
    eftifont: eftifont,
    eftipiti: eftipiti,
    eftirobot: eftirobot,
    eftitalic: eftitalic,
    eftiwall: eftiwall,
    eftiwater: eftiwater,
    epic: epic,
    fender: fender,
    fourtops: fourtops,
    fuzzy: fuzzy,
    goofy: goofy,
    gothic: gothic,
    graffiti: graffiti,
    hollywood: hollywood,
    invita: invita,
    isometric1: isometric1,
    isometric2: isometric2,
    isometric3: isometric3,
    isometric4: isometric4,
    italic: italic,
    ivrit: ivrit,
    jazmine: jazmine,
    jerusalem: jerusalem,
    katakana: katakana,
    kban: kban,
    larry3d: larry3d,
    lcd: lcd,
    lean: lean,
    letters: letters,
    linux: linux,
    lockergnome: lockergnome,
    madrid: madrid,
    marquee: marquee,
    maxfour: maxfour,
    mike: mike,
    mini: mini,
    mirror: mirror,
    mnemonic: mnemonic,
    morse: morse,
    moscow: moscow,
    nancyjfancy: nancyjfancy,
    nancyj: nancyj,
    nancyjunderlined: nancyjunderlined,
    nipples: nipples,
    ntgreek: ntgreek,
    o8: o8,
    ogre: ogre,
    pawp: pawp,
    peaks: peaks,
    pebbles: pebbles,
    pepper: pepper,
    poison: poison,
    puffy: puffy,
    pyramid: pyramid,
    relief2: relief2,
    relief: relief,
    rev: rev,
    roman: roman,
    rot13: rot13,
    rounded: rounded,
    rowancap: rowancap,
    rozzo: rozzo,
    runic: runic,
    runyc: runyc,
    sblood: sblood,
    script: script,
    serifcap: serifcap,
    shadow: shadow,
    short: short,
    slant: slant,
    slide: slide,
    slscript: slscript,
    small: small,
    smisome1: smisome1,
    smkeyboard: smkeyboard,
    smscript: smscript,
    smshadow: smshadow,
    smslant: smslant,
    smtengwar: smtengwar,
    speed: speed,
    stampatello: stampatello,
    standard: standard,
    starwars: starwars,
    stellar: stellar,
    stop: stop,
    straight: straight,
    tanja: tanja,
    tengwar: tengwar,
    term: term,
    thick: thick,
    thin: thin,
    threepoint: threepoint,
    ticks: ticks,
    ticksslant: ticksslant,
    tinkertoy: tinkertoy,
    tombstone: tombstone,
    trek: trek,
    tsalagi: tsalagi,
    twopoint: twopoint,
    univers: univers,
    usaflag: usaflag,
    wavy: wavy,
    weird: weird
  };

  parseFont(name, fn) {
    // if (name in Object.keys(this.fonts)) {
    //   fn();
    //   return;
    // }
    // var lines = this.fonts[name].split("\n"),
    //   header = lines[0].split(" "),
    //   hardblank = header[0].charAt(header[0].length - 1),
    //   height = +header[1],
    //   comments = +header[5];
    // this.fonts[name] = {
    //   defn: lines.slice(comments + 1),
    //   hardblank: hardblank,
    //   height: height,
    //   char: {}
    // };
    // fn();
  }

  _parseFont(name, defn, fn) {
    var lines = defn.split("\n"),
      header = lines[0].split(" "),
      hardblank = header[0].charAt(header[0].length - 1),
      height = +header[1],
      comments = +header[5];

    this.fonts[name] = {
      defn: lines.slice(comments + 1),
      hardblank: hardblank,
      height: height,
      char: {}
    };
    fn();
  }

  parseChar(char, font) {
    var fontDefn = this.fonts[font];
    if (char in fontDefn.char) {
      return fontDefn.char[char];
    }

    var height = fontDefn.height,
      start = (char - 32) * height,
      charDefn = [],
      i;
    for (i = 0; i < height; i++) {
      charDefn[i] = fontDefn.defn[start + i]
        .replace(/@/g, "")
        .replace(RegExp("\\" + fontDefn.hardblank, "g"), " ");
    }
    return (fontDefn.char[char] = charDefn);
  }

  write(str, font) {
    if (str.length == 0) {
      return " ";
    }
    if (font in Object.keys(this.fonts)) {
      return this.writeFont(str, font);
    }

    var lines = this.fonts[font].split("\n"),
      header = lines[0].split(" "),
      hardblank = header[0].charAt(header[0].length - 1),
      height = +header[1],
      comments = +header[5];

    this.fonts[font] = {
      defn: lines.slice(comments + 1),
      hardblank: hardblank,
      height: height,
      char: {}
    };
    return this.writeFont(str, font);

    // this.parseFont(font, () => {
    //   var chars = [],
    //     result = "";
    //   for (var i = 0, len = str.length; i < len; i++) {
    //     chars[i] = this.parseChar(str.charCodeAt(i), font);
    //   }
    //   var height;
    //   for (i = 0, height = chars[0].length; i < height; i++) {
    //     for (var j = 0; j < len; j++) {
    //       result += chars[j][i];
    //     }
    //     result += "\n";
    //   }
    //   fn(result);
    // });
  }

  writeFont(str, font) {
    var chars = [],
      result = "";
    for (var i = 0, len = str.length; i < len; i++) {
      chars[i] = this.parseChar(str.charCodeAt(i), font);
    }
    var height;
    for (i = 0, height = chars[0].length; i < height; i++) {
      for (var j = 0; j < len; j++) {
        result += chars[j][i];
      }
      result += "\n";
    }
    return result;
  }
}
