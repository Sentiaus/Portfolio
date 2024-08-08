import Link from 'next/link';
import { BxBxlGithub} from './BxBxlGithub';

const Github = () => {
	return (
		<div className="rounded-full bg-black p-1">
                <Link href="https://github.com/Sentiaus">
					<BxBxlGithub />
				</Link>
        </div>
	);
};

export default Github;