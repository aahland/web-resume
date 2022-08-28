// import adapter from '@sveltejs/adapter-node'
import node from "@sveltejs/adapter-node"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: node()
	}
};

export default config;
