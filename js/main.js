let bag1 = document.querySelector("div.shoppingbag1");
let bagIn1 = document.querySelector("div.shoppingbagin1");
let bakground = document.querySelector("div.background1");
let bakground2 = document.querySelector("div.background2");
let bakground3 = document.querySelector("div.background3");
let body = document.querySelector("body");
bagIn1.addEventListener("click", () => {
  bag1.classList.toggle("bagin");
  bakground.classList.toggle("block1");
  body.classList.toggle("overflow1");
});
let bag2 = document.querySelector("div.shoppingbag2");
let bagIn2 = document.querySelector("div.shoppingbagin2");
bagIn2.addEventListener("click", () => {
  bag2.classList.toggle("bagin");
  bakground3.classList.toggle("block1");
  body.classList.toggle("overflow1");
});
let smenu2 = document.querySelector("div.smenu2");
let smenuin2 = document.querySelector("div.smenuin2");
smenuin2.addEventListener("click", () => {
  smenu2.classList.toggle("smenuin");
  bakground2.classList.toggle("block1");
  body.classList.toggle("overflow1");
});

menuli1 = true;
$("li.menuli1").on("click", () => {
  if (menuli1 == true) {
    $("li.menuli1>div.smenu").css({
      display: "flex",
    });
    $("li.menuli1>div.bor").css({
      opacity: "1",
    });
    $("li.menuli2>div.smenu").css({
      display: "none",
    });
    $("li.menuli2>div.bor").css({
      opacity: "0",
    });
    $("li.menuli3>div.smenu").css({
      display: "none",
    });
    $("li.menuli3>div.bor").css({
      opacity: "0",
    });
    $("li.menuli4>div.smenu").css({
      display: "none",
    });
    $("li.menuli4>div.bor").css({
      opacity: "0",
    });
    menuli1 = false;
  } else {
    $("li.menuli1>div.smenu").css({
      display: "none",
    });
    $("li.menuli1>div.bor").css({
      opacity: "0",
    });
    menuli1 = true;
  }
});
menuli2 = true;
$("li.menuli2").on("click", () => {
  if (menuli2 == true) {
    $("li.menuli1>div.smenu").css({
      display: "none",
    });
    $("li.menuli1>div.bor").css({
      opacity: "0",
    });
    $("li.menuli2>div.smenu").css({
      display: "flex",
    });
    $("li.menuli2>div.bor").css({
      opacity: "1",
    });
    $("li.menuli3>div.smenu").css({
      display: "none",
    });
    $("li.menuli3>div.bor").css({
      opacity: "0",
    });
    $("li.menuli4>div.smenu").css({
      display: "none",
    });
    $("li.menuli4>div.bor").css({
      opacity: "0",
    });
    menuli2 = false;
  } else {
    $("li.menuli2>div.smenu").css({
      display: "none",
    });
    $("li.menuli2>div.bor").css({
      opacity: "0",
    });
    menuli2 = true;
  }
});
menuli3 = true;
$("li.menuli3").on("click", () => {
  if (menuli3 == true) {
    $("li.menuli1>div.smenu").css({
      display: "none",
    });
    $("li.menuli1>div.bor").css({
      opacity: "0",
    });
    $("li.menuli2>div.smenu").css({
      display: "none",
    });
    $("li.menuli2>div.bor").css({
      opacity: "0",
    });
    $("li.menuli3>div.smenu").css({
      display: "flex",
    });
    $("li.menuli3>div.bor").css({
      opacity: "1",
    });
    $("li.menuli4>div.smenu").css({
      display: "none",
    });
    $("li.menuli4>div.bor").css({
      opacity: "0",
    });
    menuli3 = false;
  } else {
    $("li.menuli3>div.smenu").css({
      display: "none",
    });
    $("li.menuli3>div.bor").css({
      opacity: "0",
    });
    menuli3 = true;
  }
});
menuli4 = true;
$("li.menuli4").on("click", () => {
  if (menuli4 == true) {
    $("li.menuli1>div.smenu").css({
      display: "none",
    });
    $("li.menuli1>div.bor").css({
      opacity: "0",
    });
    $("li.menuli2>div.smenu").css({
      display: "none",
    });
    $("li.menuli2>div.bor").css({
      opacity: "0",
    });
    $("li.menuli3>div.smenu").css({
      display: "none",
    });
    $("li.menuli3>div.bor").css({
      opacity: "0",
    });
    $("li.menuli4>div.smenu").css({
      display: "flex",
    });
    $("li.menuli4>div.bor").css({
      opacity: "1",
    });
    menuli4 = false;
  } else {
    $("li.menuli4>div.smenu").css({
      display: "none",
    });
    $("li.menuli4>div.bor").css({
      opacity: "0",
    });
    menuli4 = true;
  }
});

$("div.mm1").on("mouseenter", function () {
  $("div.con1-4").css({
    backgroundColor: "#5A1F06",
  });
  $("div.con1-4>h2").css({
    color: "white",
  });
  $("div.con1-4>p").css({
    color: "white",
  });
  $("div.mmimg>img:nth-of-type(1)").css({
    display: "block",
  });
  $("div.mmimg>img:nth-of-type(1)").css({
    opacity: "1",
  });
});
$("div.mm1").on("mouseleave", function () {
  $("div.con1-4").css({
    backgroundColor: "#FFD200",
  });
  $("div.con1-4>h2").css({
    color: "#5a1f06",
  });
  $("div.con1-4>p").css({
    color: "#5a1f06",
  });
  $("div.mmimg>img:nth-of-type(1)").css({
    display: "none",
  });
  $("div.mmimg>img:nth-of-type(1)").css({
    opacity: "0",
  });
});
$("div.mm2").on("mouseenter", function () {
  $("div.con1-4").css({
    backgroundColor: "#FA6400",
  });
  $("div.con1-4>h2").css({
    color: "white",
  });
  $("div.con1-4>p").css({
    color: "white",
  });
  $("div.mmimg>img:nth-of-type(2)").css({
    display: "block",
  });
  $("div.mmimg>img:nth-of-type(2)").css({
    opacity: "1",
  });
});
$("div.mm2").on("mouseleave", function () {
  $("div.con1-4").css({
    backgroundColor: "#FFD200",
  });
  $("div.con1-4>h2").css({
    color: "#5a1f06",
  });
  $("div.con1-4>p").css({
    color: "#5a1f06",
  });
  $("div.mmimg>img:nth-of-type(2)").css({
    display: "none",
  });
  $("div.mmimg>img:nth-of-type(2)").css({
    opacity: "0",
  });
});
$("div.mm3").on("mouseenter", function () {
  $("div.con1-4").css({
    backgroundColor: "#8A1A9B",
  });
  $("div.con1-4>h2").css({
    color: "white",
  });
  $("div.con1-4>p").css({
    color: "white",
  });
  $("div.mmimg>img:nth-of-type(3)").css({
    display: "block",
  });
  $("div.mmimg>img:nth-of-type(3)").css({
    opacity: "1",
  });
});
$("div.mm3").on("mouseleave", function () {
  $("div.con1-4").css({
    backgroundColor: "#FFD200",
  });
  $("div.con1-4>h2").css({
    color: "#5a1f06",
  });
  $("div.con1-4>p").css({
    color: "#5a1f06",
  });
  $("div.mmimg>img:nth-of-type(3)").css({
    display: "none",
  });
  $("div.mmimg>img:nth-of-type(3)").css({
    opacity: "0",
  });
});
$("div.mm4").on("mouseenter", function () {
  $("div.con1-4").css({
    backgroundColor: "#D70100",
  });
  $("div.con1-4>h2").css({
    color: "white",
  });
  $("div.con1-4>p").css({
    color: "white",
  });
  $("div.mmimg>img:nth-of-type(4)").css({
    display: "block",
  });
  $("div.mmimg>img:nth-of-type(4)").css({
    opacity: "1",
  });
});
$("div.mm4").on("mouseleave", function () {
  $("div.con1-4").css({
    backgroundColor: "#FFD200",
  });
  $("div.con1-4>h2").css({
    color: "#5a1f06",
  });
  $("div.con1-4>p").css({
    color: "#5a1f06",
  });
  $("div.mmimg>img:nth-of-type(4)").css({
    display: "none",
  });
  $("div.mmimg>img:nth-of-type(4)").css({
    opacity: "0",
  });
});
$("div.mm5").on("mouseenter", function () {
  $("div.con1-4").css({
    backgroundColor: "#FFD200",
  });
  $("div.con1-4>h2").css({
    color: "#5a1f06",
  });
  $("div.con1-4>p").css({
    color: "#5a1f06",
  });
  $("div.mmimg>img:nth-of-type(5)").css({
    display: "block",
  });
  $("div.mmimg>img:nth-of-type(5)").css({
    opacity: "1",
  });
});
$("div.mm5").on("mouseleave", function () {
  $("div.con1-4").css({
    backgroundColor: "#FFD200",
  });
  $("div.con1-4>h2").css({
    color: "#5a1f06",
  });
  $("div.con1-4>p").css({
    color: "#5a1f06",
  });
  $("div.mmimg>img:nth-of-type(5)").css({
    display: "none",
  });
  $("div.mmimg>img:nth-of-type(5)").css({
    opacity: "0",
  });
});
$("div.mm6").on("mouseenter", function () {
  $("div.con1-4").css({
    backgroundColor: "#00A832",
  });
  $("div.con1-4>h2").css({
    color: "white",
  });
  $("div.con1-4>p").css({
    color: "white",
  });
  $("div.mmimg>img:nth-of-type(6)").css({
    display: "block",
  });
  $("div.mmimg>img:nth-of-type(6)").css({
    opacity: "1",
  });
});
$("div.mm6").on("mouseleave", function () {
  $("div.con1-4").css({
    backgroundColor: "#FFD200",
  });
  $("div.con1-4>h2").css({
    color: "#5a1f06",
  });
  $("div.con1-4>p").css({
    color: "#5a1f06",
  });
  $("div.mmimg>img:nth-of-type(6)").css({
    display: "none",
  });
  $("div.mmimg>img:nth-of-type(6)").css({
    opacity: "0",
  });
});
$("div.mm7").on("mouseenter", function () {
  $("div.con1-4").css({
    backgroundColor: "#0E74E1",
  });
  $("div.con1-4>h2").css({
    color: "white",
  });
  $("div.con1-4>p").css({
    color: "white",
  });
  $("div.mmimg>img:nth-of-type(7)").css({
    display: "block",
  });
  $("div.mmimg>img:nth-of-type(7)").css({
    opacity: "1",
  });
});
$("div.mm7").on("mouseleave", function () {
  $("div.con1-4").css({
    backgroundColor: "#FFD200",
  });
  $("div.con1-4>h2").css({
    color: "#5a1f06",
  });
  $("div.con1-4>p").css({
    color: "#5a1f06",
  });
  $("div.mmimg>img:nth-of-type(7)").css({
    display: "none",
  });
  $("div.mmimg>img:nth-of-type(7)").css({
    opacity: "0",
  });
});

$("div.slideimg1").on("mouseenter", () => {
  $("div.con2-img1").css({
    display:"block"
  })
  $("div.con2-img2").css({
    display:"none"
  })
  $("div.con2-img3").css({
    display:"none"
  })
  $("div.con2-img4").css({
    display:"none"
  })
  $("div.con2-img5").css({
    display:"none"
  })
  $("div.con2-img6").css({
    display:"none"
  })
  $("div.con2-img7").css({
    display:"none"
  })
})
$("div.slideimg2").on("mouseenter", () => {
  $("div.con2-img1").css({
    display:"none"
  })
  $("div.con2-img2").css({
    display:"block"
  })
  $("div.con2-img3").css({
    display:"none"
  })
  $("div.con2-img4").css({
    display:"none"
  })
  $("div.con2-img5").css({
    display:"none"
  })
  $("div.con2-img6").css({
    display:"none"
  })
  $("div.con2-img7").css({
    display:"none"
  })
})
$("div.slideimg3").on("mouseenter", () => {
  $("div.con2-img1").css({
    display:"blononeck"
  })
  $("div.con2-img2").css({
    display:"none"
  })
  $("div.con2-img3").css({
    display:"block"
  })
  $("div.con2-img4").css({
    display:"none"
  })
  $("div.con2-img5").css({
    display:"none"
  })
  $("div.con2-img6").css({
    display:"none"
  })
  $("div.con2-img7").css({
    display:"none"
  })
})
$("div.slideimg4").on("mouseenter", () => {
  $("div.con2-img1").css({
    display:"none"
  })
  $("div.con2-img2").css({
    display:"none"
  })
  $("div.con2-img3").css({
    display:"none"
  })
  $("div.con2-img4").css({
    display:"block"
  })
  $("div.con2-img5").css({
    display:"none"
  })
  $("div.con2-img6").css({
    display:"none"
  })
  $("div.con2-img7").css({
    display:"none"
  })
})
$("div.slideimg5").on("mouseenter", () => {
  $("div.con2-img1").css({
    display:"none"
  })
  $("div.con2-img2").css({
    display:"none"
  })
  $("div.con2-img3").css({
    display:"none"
  })
  $("div.con2-img4").css({
    display:"none"
  })
  $("div.con2-img5").css({
    display:"block"
  })
  $("div.con2-img6").css({
    display:"none"
  })
  $("div.con2-img7").css({
    display:"none"
  })
})
$("div.slideimg6").on("mouseenter", () => {
  $("div.con2-img1").css({
    display:"none"
  })
  $("div.con2-img2").css({
    display:"none"
  })
  $("div.con2-img3").css({
    display:"none"
  })
  $("div.con2-img4").css({
    display:"none"
  })
  $("div.con2-img5").css({
    display:"none"
  })
  $("div.con2-img6").css({
    display:"block"
  })
  $("div.con2-img7").css({
    display:"none"
  })
})
$("div.slideimg7").on("mouseenter", () => {
  $("div.con2-img1").css({
    display:"none"
  })
  $("div.con2-img2").css({
    display:"none"
  })
  $("div.con2-img3").css({
    display:"none"
  })
  $("div.con2-img4").css({
    display:"none"
  })
  $("div.con2-img5").css({
    display:"none"
  })
  $("div.con2-img6").css({
    display:"none"
  })
  $("div.con2-img7").css({
    display:"block"
  })
})