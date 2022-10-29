
module.exports = {
  toCSV: function (jsonData) {
    const keys = [], records = [];

    for (const item of jsonData) {
      const doc = item, docKeys = Object.keys(doc), record = [];

      records.push(record);

      for (const key of docKeys) {
        let idx = keys.findIndex(k => k === key);
        if (idx === -1) {
          keys.push(key);
          idx = keys.length - 1;
        }
        record[idx] = doc[key];
      }
    }
    return { keys, records }
  },
  toJSON: function (csvData) {
    const { keys, records } = csvData;
    const keyCount = keys.length, result = [];

    for (const record of records) {
      const json = {};
      result.push(json);
      for (let keyIndex = 0; keyIndex < keyCount; keyIndex++) {
        json[keys[keyIndex]] = record[keyIndex];
      }
    }
    return result;
  }
}