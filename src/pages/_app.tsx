import React from 'react';
import App from 'next/app';

export default class AppConfig extends App {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	render() {

		const { Component, pageProps } = this.props;
		return (
			<>
				<div className='app'>
					<Component {...pageProps} />
					<style jsx global>{`
							body {
								min-height: 100vh;
								height: auto;
								margin: 0 auto;
								font-family: Avenir, --apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
							}
						`}</style>
				</div>
			</>
		);
	}
}