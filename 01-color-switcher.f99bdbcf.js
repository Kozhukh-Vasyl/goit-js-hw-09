!function(){var t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),bodyEl:document.body};t.startButton.addEventListener("click",(function(t){n.start(),t.currentTarget.disabled=n.isButtonDisabled})),t.stopButton.addEventListener("click",(function(){n.stop(),t.startButton.disabled=n.isButtonDisabled,t.bodyEl.style.backgroundColor=null}));var n={intervalId:null,isButtonDisabled:!1,start:function(){this.isButtonDisabled=!0,this.intervalId=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)},stop:function(){this.isButtonDisabled=!1,clearInterval(this.intervalId)}}}();
//# sourceMappingURL=01-color-switcher.f99bdbcf.js.map
