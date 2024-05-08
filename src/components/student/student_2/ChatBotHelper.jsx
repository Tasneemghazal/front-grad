import { useEffect } from "react";
const ChatBotHelper = () => {
  useEffect(() => {
    (function (w, d, s, o, f, js, fjs) {
      w["botsonic_widget"] = o;
      w[o] =
        w[o] ||
        function () {
          (w[o].q = w[o].q || []).push(arguments);
        };
      (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    })(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");
    Botsonic("init", {
      serviceBaseUrl: "https://api.botsonic.ai",
      token: "f7735093-b3ea-4009-9e2b-5932a5160d99",
    });
  }, []);

  return (
    <div
    style={{
      position: "fixed",
      bottom: "5zpx",
      right: "10px",
      zIndex: "9999",
    }}
    ></div>
  );
};
export default ChatBotHelper;
