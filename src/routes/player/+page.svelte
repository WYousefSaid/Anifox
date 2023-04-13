<script lang="ts">
	import Hls from 'hls.js';
	import Artplayer from 'artplayer';
	import { onMount } from 'svelte';
import artplayerPluginHlsQuality from 'artplayer-plugin-hls-quality';
	onMount(() => {
		function playM3u8(video, url, art) {
			if (Hls.isSupported()) {
				const hls = new Hls();
				hls.loadSource(url);
				hls.attachMedia(video);

				// optional
				art.hls = hls;
				art.once('url', () => hls.destroy());
				art.once('destroy', () => hls.destroy());
			} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
				video.src = url;
			} else {
				art.notice.show = 'Unsupported playback format: m3u8';
			}
		}

		var art = new Artplayer({
			container: '.artplayer-app',
			url: 'https://proxy.vnxservers.com/proxy/m3u8/https%3A%2F%2Fc-an-ca3.betterstream.cc%3A2223%2Fhls-playback%2F71f87b4028d27b3ba749bd2029f3248245618a740ca81a9a9863f257784436f85c939482f4d306945639b935dc612f231ee72e78b82b585d5f189390bf7b768ef9a446f832c8d9520ed37824c2a37cd9caa695ca5490a5642fb7394341e61667a04edbc87a32a68cf488f6842828941fa71e9694cae6a61ec7a0d3fb659047c7851cc867d2bb906842f492eaf618e8c4%2Fmaster.m3u8',
			theme: '#23ade5',
			type: 'm3u8',
			playbackRate: true,
			setting: true,
			aspectRatio: true,
			hotkey: true,
			pip: true,
			fullscreen: true,
			plugins: [
				artplayerPluginHlsQuality({
					// Show quality in control
					control: true,

					// Show quality in setting
					setting: true,

					// Get the resolution text from level
					getResolution: (level) => level.height + 'P',

					// I18n
					title: 'Quality',
					auto: 'Auto'
				})
			],
			icons: {
        indicator: '<img width="16" heigth="16" src="/images/indicator.svg">',
    },
		thumbnails: {
        url: 'https://prev.zorores.com/_a_preview/76/76c7d19582984c21fb4c9962b812820a/thumbnails/sprite.vtt',
				number: 100,
        column: 10,
      
    },
			subtitle: {
        url: 'https://cc.zorores.com/73/fd/73fd2e74257659a8ef9b9cdd004623a5/eng-2.vtt',
        type: 'srt',
        encoding: 'utf-8',
        escape: true,
        style: {
            color: '#03A9F4',
            'font-size': '30px',
        },
    },
			customType: {
				m3u8: playM3u8
			}
		});

		art.on('ready', () => {
			console.info(art.hls);
		});
	});
</script>

<div class="artplayer-container">
	<div class="artplayer-app" />
</div>

<style>
	.artplayer-app {
		width: 400px;
		height: 300px;
	}
</style>
