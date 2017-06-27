export default {
  state: {
    selected: [],
    headers: [
      { text: '状态', value: 'status', left: true, sortable: false },
      { text: '名称', value: 'name', left: true, sortable: false },
      { text: '进度', value: 'process', left: true, sortable: false },
      { text: '剩余时间', value: 'time', left: false, sortable: false },
      { text: '下载速度', value: 'speed', left: false, sortable: false }
    ],
    items: [
      {
        id: 1,
        status: '下载',
        name: 'node.js',
        process: 10,
        time: '10s',
        speed: 512
      },
      {
        id: 2,
        status: '等待',
        name: 'git.exe',
        process: 9,
        time: '10s',
        speed: 300
      },
      {
        id: 3,
        status: '暂停',
        name: 'aria2.exe',
        process: 16,
        time: '10m',
        speed: 1204
      },
      {
        id: 4,
        status: '暂停',
        name: 'qq.exe',
        process: 100,
        time: '10h',
        speed: 128
      },
      {
        id: 5,
        status: '暂停',
        name: 'download.zip',
        process: 16,
        time: '10m',
        speed: 160
      }
    ]
  }
}
