import '../styles/index.scss';
import * as next from 'next';
import { hello } from '../services/service';
const IndexPage = props => {
    return ( <div className="main">
        This is a boilerplate using Next.JS, Express, TypeScript, and SCSS to create a web application.
        <br />
        Created by <a href="https://www.shihab.dev">Shihab Chowdhury</a>
        hello {props.hello}
        </div>
    );
}
  
IndexPage.getInitialProps = async (ctx: next.NextPageContext) => {
    const { world } = await hello();
    return { hello: world }
}
export default IndexPage;