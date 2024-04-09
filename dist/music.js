const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放
    audio: [
	{
        name: "ICARUS",
        artist: 'Tony Ann',
        url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VSZEVyenlpZXFWRXBMX1lYMXBWNXc0QlBOUjdzamtPZHhGVXdXem9kWmdQN3c.mp3',
        cover: 'http://p1.music.126.net/g3-tVEarBjThw-3ltBIwpQ==/109951169164218103.jpg?param=130y130',	
    },
    {
        name: "春日影 (MyGO!!!!! ver.)",
        artist: 'MyGO!!!!!',
        url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VZNUlxdDVXaWJ4S3Nzd2hSRm5mN3gwQnNzSjNnS2JlVXhuaTlPeTJBSXE2UVE.mp3',
        cover: 'http://p2.music.126.net/E70jbhvMD0AbFed6YcsHHQ==/109951169378857802.jpg?param=130y130',	
    },
    {
        name: "Wildest Dreams",
        artist: 'Taylor Swift',
        url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkRE1jNHBzUUNGSW1pTTVGZEtPb3hvQlpiaHA5bzhCRzd1WlNBaTRvNXNFc2c.mp3',
        cover: 'http://p1.music.126.net/3KDqQ9XW2Khj5Ia4tRqAAw==/18771962022688349.jpg?param=130y130',	
    },
    {
        name: "花鳥風月",
        artist: '優里',
        url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VYdGUtNEFNTXE5Q3RkS0xGOGFNOTQ0QmNlYy14MGU3Q3hldldTdDFCZWVkSVE.mp3',
        cover: 'http://p1.music.126.net/7jAHPAvg18_FHTib7Nbduw==/109951166752574842.jpg?param=130y130',	
    },
	]
});
