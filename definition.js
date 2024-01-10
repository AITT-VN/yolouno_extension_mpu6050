const MPUColorBlock = "#2ECC71";


Blockly.Blocks['uno_mpu6050_init'] = {
  init: function () {
    this.jsonInit(
      {
        type: "uno_mpu6050_init",
        message0: "khởi tạo cảm biến gia tốc góc MPU6050",
        previousStatement: null,
        nextStatement: null,
        args0: [],
        colour: MPUColorBlock,
        tooltip: "khởi tạo cảm biến gia tốc góc MPU6050",
        helpUrl: ""
      }
    );
  }
};

Blockly.Python['uno_mpu6050_init'] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_mpu6050'] = 'from mpu6050 import *';
  Blockly.Python.definitions_['init_mpu6050'] = 'mpu6050 = MPU6050()';
  var code = 'mpu6050.begin()\n';
  return code;
};

Blockly.Blocks["uno_mpu6050_get_accel"] = {
  init: function () {
    this.jsonInit({
      colour: MPUColorBlock,
      tooltip: "",
      message0: "đọc cảm biến gia tốc %1",
      args0: [
        {
          type: "field_dropdown",
          name: "accel",
          options: [
            ["x", "x"],
            ["y", "y"],
            ["z", "z"],
          ],
        }
      ],
      output: "Number",
      helpUrl: ""
    });
  },
};

Blockly.Blocks["uno_mpu6050_get_gyro"] = {
  init: function () {
    this.jsonInit({
      colour: MPUColorBlock,
      tooltip: "",
      message0: "đọc cảm biến gyroscope %1",
      args0: [
        {
          type: "field_dropdown",
          name: "gyro",
          options: [
            ["roll", "roll"],
            ["pitch", "pitch"],
            ["yaw", "yaw"],
          ]
        }
      ],
      output: "Number",
      helpUrl: ""
    });
  },
};

Blockly.Blocks["uno_mpu6050_is_shake"] = {
  init: function () {
    this.jsonInit({
      colour: MPUColorBlock,
      tooltip: "",
      message0: "cảm biến phát hiện bị lắc",
      args0: [],
      output: "Boolean",
      helpUrl: ""
    });
  },
};

//==============MPU==============
Blockly.Python["uno_mpu6050_get_accel"] = function (block) {
  var accel = block.getFieldValue("accel");
  Blockly.Python.definitions_['import_mpu6050'] = 'from mpu6050 import *';
  Blockly.Python.definitions_['init_mpu6050'] = 'mpu6050 = MPU6050()';
  // TODO: Assemble Python into code variable.
  var code = "mpu6050.get_accel('" + accel + "')";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["uno_mpu6050_get_gyro"] = function (block) {
  var gyro = block.getFieldValue("gyro");
  Blockly.Python.definitions_['import_mpu6050'] = 'from mpu6050 import *';
  Blockly.Python.definitions_['init_mpu6050'] = 'mpu6050 = MPU6050()';
  // TODO: Assemble Python into code variable.
  var code = "mpu6050.get_gyro_" + gyro + "()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["uno_mpu6050_is_shake"] = function (block) {
  var gyro = block.getFieldValue("gyro");
  Blockly.Python.definitions_['import_mpu6050'] = 'from mpu6050 import *';
  Blockly.Python.definitions_['init_mpu6050'] = 'mpu6050 = MPU6050()';
  // TODO: Assemble Python into code variable.
  var code = "mpu6050.is_shaked()";
  return [code, Blockly.Python.ORDER_NONE];
};