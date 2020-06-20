module.exports = {
  canIUse: function canIUse(...args) {
    return my.canIUse(...args);
  },

  getSystemInfo: function getSystemInfo({
    success,
    fail,
    complate
  }) {
    return my.getSystemInfo({
      success,
      fail,
      complate
    });
  },

  getSystemInfoSync: function getSystemInfoSync() {
    return my.getSystemInfoSync();
  },

  getUpdateManager: function getUpdateManager() {
    return my.getUpdateManager();
  },

  switchTab: function switchTab(...args) {
    return my.switchTab(...args);
  },

  reLaunch: function reLaunch(...args) {
    return my.reLaunch(...args);
  },

  redirectTo: function redirectTo(...args) {
    return my.redirectTo(...args);
  },

  navigateTo: function navigateTo(...args) {
    return my.navigateTo(...args);
  },

  navigateBack: function navigateBack(...args) {
    return my.navigateBack(...args);
  },

  getStorage: function getStorage(...args) {
    return my.getStorage(...args);
  },

  getStorageSync: function getStorageSync(...args) {
    if (args.length === 1) {
      return my.getStorageSync({
        key: args[0],
      });
    }
    return false;
  },

  setStorage: function setStorage(...args) {
    return my.setStorage(...args);
  },

  setStorageSync: function setStorageSync(...args) {
    if (args.length === 2) {
      return my.setStorageSync({
        key: args[0],
        data: args[1],
      });
    }
    return false;
  },

  removeStorage: function removeStorage(...args) {
    return my.removeStorage(...args);
  },

  removeStorageSync: function removeStorageSync(...args) {
    if (args.length === 1) {
      return my.removeStorageSync({
        key: args[0],
      });
    }
    return false;
  },

  getStorageInfo: function getStorageInfo({
    success,
    fail,
    complete
  }) {
    return my.getStorageInfo({
      success,
      fail,
      complete
    });
  },

  getStorageInfoSync: function getStorageInfoSync() {
    return my.getStorageInfoSync();
  },

  clearStorage: function clearStorage() {
    return my.clearStorage();
  },

  clearStorageSync: function clearStorageSync() {
    return my.clearStorageSync();
  },

  request: function request({
    url,
    data,
    header,
    method,
    dataType,
    success,
    fail,
    complete,
  }) {
    const requestObj = {
      url,
      headers: header,
      method,
      data: JSON.stringify(data),
      timeout: 30000,
      dataType,
      success: ({
        data,
        status,
        headers
      }) => {
        if (success) {
          success({
            data,
            statusCode: status,
            header: headers
          });
        }
      },
      fail,
      complete,
    };
    if (my.canIUse('request')) {
      return my.request(requestObj);
    }
    return my.httpRequest(requestObj);
  },

  uploadFile: function uploadFile({
    url,
    filePath,
    name,
    header,
    formData,
    success,
    fail,
    complete
  }) {
    return my.uploadFile({
      url,
      filePath,
      fileName: name,
      header,
      formData,
      success,
      fail,
      complete,
    });
  },

  downloadFile: function downloadFile({
    url,
    header,
    success,
    fail,
    complete,
  }) {
    return my.downloadFile({
      url,
      header,
      success: (apFilePath) => {
        if (success) {
          return success({
            tempFilePath: apFilePath,
          });
        }
      },
      fail,
      complete,
    });
  },

  connectSocket: function connectSocket() {
    return my.connectSocket();
  },

  onSocketOpen: function onSocketOpen() {
    return my.onSocketOpen();
  },

  onSocketError: function onSocketError() {
    return my.onSocketError();
  },

  sendSocketMessage: function sendSocketMessage() {
    return my.sendSocketMessage();
  },

  onSocketMessage: function onSocketMessage() {
    return my.onSocketMessage();
  },

  closeSocket: function closeSocket() {
    return my.closeSocket();
  },

  onSocketClose: function onSocketClose() {
    return my.onSocketClose();
  },

  saveImageToPhotosAlbum: function saveImageToPhotosAlbum({
    filePath,
    success,
    fail,
    complete,
  }) {
    return my.saveImage({
      url: filePath,
      success,
      fail,
      complete,
    });
  },

  previewImage: function previewImage() {
    return my.previewImage();
  },

  getImageInfo: function getImageInfo() {
    return my.getImageInfo();
  },

  chooseMessageFile: function chooseMessageFile() {
    return my.chooseMessageFile();
  },

  chooseImage: function chooseImage() {
    return my.chooseImage();
  },

  showToast: function showToast({
    title,
    icon,
    duration,
    success,
    fail,
    complete,
  }) {
    return my.showToast({
      content: title,
      type: icon,
      duration,
      success,
      fail,
      complete,
    });
  },

  showModal: function showModal({
    title,
    content,
    cancelText,
    confirmText,
    success,
    fail,
    complete,
  }) {
    return my.confirm({
      title,
      content,
      cancelButtonText: cancelText,
      confirmButtonText: confirmText,
      success: ({
        confirm
      }) => {
        if (success) {
          success({
            confirm,
            cancel: !confirm
          });
        }
      },
      fail,
      complete,
    });
  },

  showLoading: function showLoading({
    title,
    success,
    fail,
    complete,
  }) {
    return my.showLoading({
      content: title,
      success,
      fail,
      complete,
    });
  },

  showActionSheet: function showActionSheet({
    itemList,
    success,
    fail,
    complete,
  }) {
    return my.showActionSheet({
      items: itemList,
      success: ({
        index
      }) => {
        if (success) {
          success({
            tapIndex: index
          });
        }
      },
      fail,
      complete,
    });
  },

  hideToast: function hideToast() {
    return my.hideToast();
  },

  hideLoading: function hideLoading() {
    return my.hideLoading();
  },

  showNavigationBarLoading: function showNavigationBarLoading() {
    return my.showNavigationBarLoading();
  },

  setNavigationBarTitle: function setNavigationBarTitle({
    title,
    success,
    fail,
    complete,
  }) {
    return my.setNavigationBar({
      title,
      success,
      fail,
      complete,
    });
  },

  setNavigationBarColor: function setNavigationBarColor({
    backgroundColor,
    success,
    fail,
    complete,
  }) {
    return my.setNavigationBar({
      backgroundColor,
      success,
      fail,
      complete,
    });
  },

  hideNavigationBarLoading: function hideNavigationBarLoading() {
    return my.hideNavigationBarLoading();
  },

  stopPullDownRefresh: function stopPullDownRefresh() {
    return my.stopPullDownRefresh();
  },

  pageScrollTo: function pageScrollTo({
    scrollTop
  }) {
    return my.pageScrollTo({
      scrollTop,
    });
  },

  createAnimation: function createAnimation({
    duration,
    timingFunction,
    delay,
    transformOrigin,
  }) {
    return my.createAnimation({
      transformOrigin,
      duration,
      timeFunction: timingFunction,
      delay,
    });
  },

  createCanvasContext: function createCanvasContext(canvasId, componentCtx) {
    if (componentCtx) {
      console.warn('支付宝小程序不支持第二个参数，请修改！');
    }
    return my.createCanvasContext(canvasId);
  },

  stopAccelerometer: function stopAccelerometer({
    succss,
    fail,
    complete
  }) {
    return my.offAccelerometerChange({
      succss,
      fail,
      complete,
    });
  },

  onAccelerometerChange: function onAccelerometerChange() {
    return my.onAccelerometerChange();
  },

  stopBluetoothDevicesDiscovery: function stopBluetoothDevicesDiscovery({
    success,
    fail,
    complete,
  }) {
    return my.stopBluetoothDevicesDiscovery({
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  startBluetoothDevicesDiscovery: function startBluetoothDevicesDiscovery({
    services,
    allowDuplicatesKey,
    interval,
    success,
    fail,
    complete,
  }) {
    return my.startBluetoothDevicesDiscovery({
      services,
      allowDuplicatesKey,
      interval,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  openBluetoothAdapter: function openBluetoothAdapter({
    success,
    fail,
    complete,
  }) {
    return my.openBluetoothAdapter({
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  onBluetoothDeviceFound: function onBluetoothDeviceFound(callback) {
    return my.onBluetoothDeviceFound(callback);
  },

  onBluetoothAdapterStateChange: function onBluetoothAdapterStateChange(callback) {
    return my.onBluetoothAdapterStateChange(callback);
  },

  getConnectedBluetoothDevices: function getConnectedBluetoothDevices({
    services,
    success,
    fail,
    complete,
  }) {
    return my.getConnectedBluetoothDevices({
      services,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  getBluetoothDevices: function getBluetoothDevices({
    success,
    fail,
    complete,
  }) {
    return my.getBluetoothDevices({
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  getBluetoothAdapterState: function getBluetoothAdapterState({
    success,
    fail,
    complete,
  }) {
    return my.getBluetoothAdapterState({
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  closeBluetoothAdapter: function closeBluetoothAdapter({
    success,
    fail,
    complete,
  }) {
    return my.closeBluetoothAdapter({
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  readBLECharacteristicValue: function readBLECharacteristicValue({
    deviceId,
    serviceId,
    characteristicId,
    success,
    fail,
    complete,
  }) {
    return my.readBLECharacteristicValue({
      deviceId,
      serviceId,
      characteristicId,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  onBLEConnectionStateChange: function onBLEConnectionStateChange(callback) {
    return my.onBLEConnectionStateChanged(callback);
  },

  onBLECharacteristicValueChange: function onBLECharacteristicValueChange(callback) {
    return my.readBLECharacteristicValue(callback);
  },

  notifyBLECharacteristicValueChange: function notifyBLECharacteristicValueChange({
    deviceId,
    serviceId,
    characteristicId,
    state,
    success,
    fail,
    complete,
  }) {
    return my.notifyBLECharacteristicValueChange({
      deviceId,
      serviceId,
      characteristicId,
      state,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  getBLEDeviceServices: function getBLEDeviceServices({
    deviceId,
    success,
    fail,
    complete,
  }) {
    return my.getBLEDeviceServices({
      deviceId,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  getBLEDeviceCharacteristics: function getBLEDeviceCharacteristics({
    deviceId,
    serviceId,
    success,
    fail,
    complete,
  }) {
    return my.getBLEDeviceCharacteristics({
      deviceId,
      serviceId,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  createBLEConnection: function createBLEConnection({
    deviceId,
    success,
    fail,
    complete,
  }) {
    return my.connectBLEDevice({
      deviceId,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  closeBLEConnection: function closeBLEConnection({
    deviceId,
    success,
    fail,
    complete,
  }) {
    return my.disconnectBLEDevice({
      deviceId,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  writeBLECharacteristicValue: function writeBLECharacteristicValue({
    deviceId,
    serviceId,
    characteristicId,
    value,
    success,
    fail,
    complete,
  }) {
    return my.writeBLECharacteristicValue({
      deviceId,
      serviceId,
      characteristicId,
      value,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  setClipboardData: function setClipboardData({
    data,
    success,
    fail,
    complete,
  }) {
    return my.setClipboard({
      text: data,
      success,
      fail,
      complete,
    });
  },

  getClipboardData: function getClipboardData({
    success,
    fail,
    complete,
  }) {
    return my.getClipboard({
      success: (res) => {
        res.data = res.text;
        delete res.text;
        success(res);
      },
      fail,
      complete,
    });
  },

  stopCompass: function stopCompass({
    succss,
    fail,
    complete
  }) {
    return my.offCompassChange({
      succss,
      fail,
      complete,
    });
  },

  onCompassChange: function onCompassChange() {
    return my.onCompassChange();
  },

  addPhoneContact: function addPhoneContact({
    firstName,
    photoFilePath,
    nickName,
    lastName,
    middleName,
    remark,
    mobilePhoneNumber,
    addressCountry,
    addressState,
    addressCity,
    addressStreet,
    addressPostalCode,
    organization,
    title,
    workFaxNumber,
    workPhoneNumber,
    hostNumber,
    email,
    url,
    workAddressCountry,
    workAddressState,
    workAddressCity,
    workAddressStreet,
    workAddressPostalCode,
    homeFaxNumber,
    homePhoneNumber,
    homeAddressCountry,
    homeAddressState,
    homeAddressCity,
    homeAddressStreet,
    homeAddressPostalCode,
    success,
    fail,
    complete,
  }) {
    return my.writeBLECharacteristicValue({
      firstName,
      photoFilePath,
      nickName,
      lastName,
      middleName,
      remark,
      mobilePhoneNumber,
      addressCountry,
      addressState,
      addressCity,
      addressStreet,
      addressPostalCode,
      organization,
      title,
      workFaxNumber,
      workPhoneNumber,
      hostNumber,
      email,
      url,
      workAddressCountry,
      workAddressState,
      workAddressCity,
      workAddressStreet,
      workAddressPostalCode,
      homeFaxNumber,
      homePhoneNumber,
      homeAddressCountry,
      homeAddressState,
      homeAddressCity,
      homeAddressStreet,
      homeAddressPostalCode,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  stopGyroscope: function stopGyroscope({
    succss,
    fail,
    complete
  }) {
    return my.offGyroscopeChange({
      succss,
      fail,
      complete,
    });
  },

  onGyroscopeChange: function onGyroscopeChange() {
    return my.onGyroscopeChange();
  },

  startBeaconDiscovery: function startBeaconDiscovery({
    uuids,
    success,
    fail,
    complete,
  }) {
    return my.startBeaconDiscovery({
      uuids,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  stopBeaconDiscovery: function stopBeaconDiscovery({
    success,
    fail,
    complete,
  }) {
    return my.stopBeaconDiscovery({
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  onBeaconUpdate: function onBeaconUpdate(callback) {
    return my.onBeaconUpdate({
      success: callback
    });
  },

  onBeaconServiceChange: function onBeaconServiceChange(callback) {
    return my.onBeaconServiceChange({
      success: callback
    });
  },

  getBeacons: function getBeacons({
    success,
    fail,
    complete,
  }) {
    return my.getBeacons({
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  onNetworkStatusChange: function onNetworkStatusChange(callback) {
    return my.onNetworkStatusChange(callback);
  },

  getNetworkType: function getNetworkType({
    success,
    fail,
    complete,
  }) {
    return my.getNetworkType({
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  makePhoneCall: function makePhoneCall({
    phoneNumber,
    success,
    fail,
    complete,
  }) {
    return my.makePhoneCall({
      number: phoneNumber,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  scanCode: function scanCode({
    onlyFromCamera = false,
    scanType = ['barCode', 'qrCode'],
    success,
    fail,
    complete,
  }) {
    let type = 'qr';
    if (scanType[0] === 'barCode') {
      type = 'bar';
    } else if (scanType[0] === 'qrCode') {
      type = 'qr';
    }
    return my.scan({
      hideAlbum: onlyFromCamera,
      type,
      success: (res = {}) => {
        res.result = res.code;
        success(res);
      },
      fail,
      complete,
    });
  },

  setScreenBrightness: function setScreenBrightness({
    value,
    success,
    fail,
    complete,
  }) {
    return my.setScreenBrightness({
      brightness: value,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  setKeepScreenOn: function setKeepScreenOn({
    keepScreenOn,
    success,
    fail,
    complete,
  }) {
    return my.setKeepScreenOn({
      keepScreenOn,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  onUserCaptureScreen: function onUserCaptureScreen(callback) {
    return my.onUserCaptureScreen(callback);
  },

  getScreenBrightness: function getScreenBrightness({
    success,
    fail,
    complete,
  }) {
    return my.getScreenBrightness({
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  vibrateShort: function vibrateShort() {
    return my.vibrateShort();
  },

  vibrateLong: function vibrateLong() {
    return my.vibrateLong();
  },

  saveFile: function saveFile({
    tempFilePath,
    success,
    fail,
    complete,
  }) {
    return my.saveFile({
      apFilePath: tempFilePath,
      success: (res) => {
        if (res) {
          res.savedFilePath = res.apFilePath;
        }
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  getFileInfo: function getFileInfo({
    filePath,
    digestAlgorithm,
    success,
    fail,
    complete,
  }) {
    return my.getFileInfo({
      apFilePath: filePath,
      digestAlgorithm,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  getSavedFileInfo: function getSavedFileInfo({
    filePath,
    success,
    fail,
    complete,
  }) {
    return my.getSavedFileInfo({
      apFilePath: filePath,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  getSavedFileList: function getSavedFileList({
    success,
    fail,
    complete,
  }) {
    return my.getSavedFileList({
      success: (res) => {
        if (res && res.length >= 0) {
          for (let index = 0; index < res.length; index += 1) {
            res[index].filePath = res[index].apFilePath;
          }
        }
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  removeSavedFile: function removeSavedFile({
    filePath,
    success,
    fail,
    complete,
  }) {
    return my.removeSavedFile({
      apFilePath: filePath,
      success: (res) => {
        if (success) {
          success(res);
        }
      },
      fail,
      complete,
    });
  },

  navigateToMiniProgram: function navigateToMiniProgram() {
    return my.navigateToMiniProgram();
  },

  navigateBackMiniProgram: function navigateBackMiniProgram() {
    return my.navigateBackMiniProgram();
  },

  reportAnalytics: function reportAnalytics() {
    return my.reportAnalytics();
  },

  openSetting: function openSetting({
    success = noop,
    fail,
    complete
  }) {
    return my.openSetting({
      success: (res = {}) => {
        res.userLocation = res.location;
        success(res);
      },
      fail,
      complete,
    });
  },

  getSetting: function getSetting({
    success = noop,
    fail,
    complete
  }) {
    return my.getSetting({
      success: (res = {}) => {
        res.userLocation = res.location;
        success(res);
      },
      fail,
      complete,
    });
  },

  openLocation: function openLocation(...args) {
    return my.openLocation(...args);
  },

  getLocation: function getLocation({
    type,
    altitude,
    success,
    fail,
    complete,
  }) {
    if (altitude) {
      console.warn('wx2my: my.getLocation中altitude不支持');
    }
    if (type && (type === 'wgs84' || type === 'gcj02')) {
      console.warn('wx2my: my.getLocation中type只支持数字altitude不支持');
    }
    return my.getLocation({
      type,
      success,
      fail,
      complete,
    });
  },

  chooseLocation: function chooseLocation(...args) {
    return my.chooseLocation(...args);
  },

  createSelectorQuery: function createSelectorQuery(...args) {
    return my.createSelectorQuery(...args);
  },

}
