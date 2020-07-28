import React from 'react';
import '../styles/index.scss';
import { NextPage } from 'next';
import { hello } from '../services/service';

type PageProps = {
    hello: string;
}

const IndexPage: NextPage<PageProps> = ({ hello }: PageProps) => {
	return ( 
		<div className="main">
            This is a boilerplate using Next.JS, Express, TypeScript, and SCSS to create a web application.
			<br />
            Created by <a href="https://www.shihab.dev">Shihab Chowdhury</a>
            hello {hello}
		</div>
	);
};
  
IndexPage.getInitialProps = async () => {
	const { world } = await hello();
	return { hello: world };
};
export default IndexPage;