import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './client/public/threejs.png',
    fullDecal: './client/public/threejs.png',
});

export default state;