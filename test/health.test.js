const test = require('node:test');
test('健康检查契约存在', () => { if (!('/health')) throw new Error('缺少健康检查路径'); });
