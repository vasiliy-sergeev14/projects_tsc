import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18nextPlugin from "eslint-plugin-i18next";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    
    {   
        plugins: {
            i18next: i18nextPlugin
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": ["warn"],
            "react/no-deprecated": "off",
            indent: [2, 4],
            "i18next/no-literal-string": [2, {
                markupOnly: true,
                ignoreAttribute: ["data-testid", "to", "data-cy", "data-test-id"]
            }]
        },
        settings: {
            react: {
                version: "detect"  // Автоматически определит версию React
            }
        }
    }
];