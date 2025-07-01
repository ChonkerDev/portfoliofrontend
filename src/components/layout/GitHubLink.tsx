import { FaGithub } from 'react-icons/fa';

export default function GitHubLink({ url }: { url: string }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
        >
            <FaGithub size={20} />
            <span>View on GitHub</span>
        </a>
    );
}