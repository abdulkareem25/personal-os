import Terminal from "react-console-emulator";
import MacWindow from "../macwindow/MacWindow";
import "./cli.scss";

const Cli = () => {
    const commands = {

        about: {
            description: "About me",
            fn: () =>
                "Hi 👋 I'm Abdulkareem, a frontend developer who loves building clean UIs and fun web experiences.",
        },

        skills: {
            description: "List of skills",
            fn: () =>
                "JavaScript, React, SCSS, Tailwind, Git, REST APIs, UI/UX basics",
        },

        projects: {
            description: "Some of my projects",
            fn: () =>
                "• Portfolio Website\n• CLI-style Terminal UI\n• Dashboard UI\n• REST API Integrations",
        },

        contact: {
            description: "Contact information",
            fn: () =>
                "Email: abdulkareem@example.com\nGitHub: github.com/abdulkareem25\nLinkedIn: linkedin.com/in/abdulkareem25",
        },

        date: {
            description: "Show current date & time",
            fn: () => new Date().toString(),
        },

        echo: {
            description: "Echo back text",
            fn: (args) => args.join(" "),
        },
    };

    return (
        <MacWindow name="cli" title="Command Line Interface" logo="/doc-icons/cli.svg">
            <Terminal
                welcomeMessage={
                    `👋 Welcome to Abdulkareem's CLI Portfolio\n` +
                    `Type "help" to see all available commands.\n` +
                    ` ---------------------------------------------\n`  +
                    `help - List available commands\n` +
                    `about - About me\n` +
                    `skills - My skills\n` +
                    `projects - My projects\n` +
                    `contact - Contact information\n` +
                    `date - Show current date & time\n` +
                    `echo [text] - Echo back the provided text\n` +
                    ` ---------------------------------------------`
                }
                promptLabel="abdulkareem25:~$ "
                promptLabelStyle={{ color: "#00ff00" }}
                commands={commands}
                style={{
                    height: "100%",
                    backgroundColor: "#0d0d0d",
                    color: "#ffffff",
                    fontFamily: "monospace",
                    borderRadius: "12px",
                }}
            />
        </MacWindow>
    );
};

export default Cli;