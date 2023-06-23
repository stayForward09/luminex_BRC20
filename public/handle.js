if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  setTimeout(() => {
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    var __generator =
      (this && this.__generator) ||
      function (thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: [],
          },
          f,
          y,
          t,
          g;
        return (
          (g = { next: verb(0), throw: verb(1), return: verb(2) }),
          typeof Symbol === "function" &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (
                ((f = 1),
                y &&
                  (t =
                    op[0] & 2
                      ? y["return"]
                      : op[0]
                      ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                      : y.next) &&
                  !(t = t.call(y, op[1])).done)
              )
                return t;
              if (((y = 0), t)) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (
                    !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                    (op[0] === 6 || op[0] === 2)
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };

    var SatsMethodsProvider = {
      connect: function (btcAddressRequest) {
        return __awaiter(void 0, void 0, void 0, function () {
          var event;
          return __generator(this, function (_a) {
            event = new CustomEvent(DomEventName.getAddressRequest, {
              detail: { btcAddressRequest: btcAddressRequest },
            });
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                eventType: ExternalMethods.getAddressRequest,
                data: btcAddressRequest,
              })
            );
            document.dispatchEvent(event);
            return [
              2 /*return*/,
              new Promise(function (resolve, reject) {
                var handleMessage = function (eventMessage) {
                  document.removeEventListener("message", handleMessage);
                  window.removeEventListener("message", handleMessage);
                  var resData = JSON.parse(eventMessage.data);
                  var _a;
                  if (
                    !isValidEvent(
                      eventMessage,
                      ExternalMethods.getAddressResponse
                    )
                  )
                    return;
                  if (
                    ((_a = resData.payload) === null || _a === void 0
                      ? void 0
                      : _a.addressRequest) !== btcAddressRequest
                  )
                    return;
                  if (resData.payload.addressResponse === "cancel") {
                    reject(resData.payload.addressResponse);
                    return;
                  }
                  if (typeof resData.payload.addressResponse !== "string") {
                    resolve(resData.payload.addressResponse);
                  }
                };
                document.addEventListener("message", handleMessage);
                window.addEventListener("message", handleMessage);
              }),
            ];
          });
        });
      },
      signTransaction: function (signPsbtRequest) {
        return __awaiter(void 0, void 0, void 0, function () {
          var event;
          return __generator(this, function (_a) {
            event = new CustomEvent(DomEventName.signPsbtRequest, {
              detail: { signPsbtRequest: signPsbtRequest },
            });
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                eventType: ExternalMethods.signPsbtRequest,
                data: signPsbtRequest,
              })
            );
            document.dispatchEvent(event);
            return [
              2 /*return*/,
              new Promise(function (resolve, reject) {
                var handleMessage = function (eventMessage) {
                  if (typeof eventMessage.data == "object") {
                    console.log("ignore CF message");
                  } else {
                    document.removeEventListener("message", handleMessage);
                    window.removeEventListener("message", handleMessage);
                    var resData = JSON.parse(eventMessage.data);
                    var _a;
                    if (
                      !isValidEvent(
                        eventMessage,
                        ExternalMethods.signPsbtResponse
                      )
                    )
                      return;
                    if (
                      ((_a = resData.payload) === null || _a === void 0
                        ? void 0
                        : _a.signPsbtRequest) !== signPsbtRequest
                    )
                      return;
                    if (resData.payload.signPsbtResponse === "cancel") {
                      reject(resData.payload.signPsbtResponse);
                      return;
                    }
                    if (typeof resData.payload.signPsbtResponse !== "string") {
                      resolve(resData.payload.signPsbtResponse);
                    }
                  }
                };
                document.addEventListener("message", handleMessage);
                window.addEventListener("message", handleMessage);
              }),
            ];
          });
        });
      },
      signMessage: function (signMessageRequest) {
        return __awaiter(void 0, void 0, void 0, function () {
          var event;
          return __generator(this, function (_a) {
            event = new CustomEvent(DomEventName.signMessageRequest, {
              detail: { signMessageRequest: signMessageRequest },
            });
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                eventType: ExternalMethods.signMessageRequest,
                data: signMessageRequest,
              })
            );
            document.dispatchEvent(event);
            return [
              2 /*return*/,
              new Promise(function (resolve, reject) {
                var handleMessage = function (eventMessage) {
                  document.removeEventListener("message", handleMessage);
                  window.removeEventListener("message", handleMessage);
                  var resData = JSON.parse(eventMessage.data);
                  var _a;
                  if (
                    !isValidEvent(
                      eventMessage,
                      ExternalMethods.signMessageResponse
                    )
                  )
                    return;
                  if (
                    ((_a = resData.payload) === null || _a === void 0
                      ? void 0
                      : _a.signMessageRequest) !== signMessageRequest
                  )
                    return;
                  if (resData.payload.signMessageResponse === "cancel") {
                    reject(resData.payload.signMessageResponse);
                    return;
                  }
                  if (typeof resData.payload.signMessageResponse === "string") {
                    resolve(resData.payload.signMessageResponse);
                  }
                };
                document.addEventListener("message", handleMessage);
                window.addEventListener("message", handleMessage);
              }),
            ];
          });
        });
      },
      call: function (request) {
        throw new Error("call function is not implemented");
      },
    };

    window.BitcoinProvider = SatsMethodsProvider;
  }, 2000);
}
