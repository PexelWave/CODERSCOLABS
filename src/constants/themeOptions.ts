import { androidstudio } from '@uiw/codemirror-theme-androidstudio'
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm'
import { tomorrowNightBlue } from '@uiw/codemirror-theme-tomorrow-night-blue'
import { githubDark, githubLight } from '@uiw/codemirror-theme-github'
import { abyss } from '@uiw/codemirror-theme-abyss'
import {andromeda} from '@uiw/codemirror-theme-andromeda'
import { aura } from '@uiw/codemirror-theme-aura'
import { eclipse } from '@uiw/codemirror-theme-eclipse'

import { Extension } from '@uiw/react-codemirror';


type ThemeOption = {
    value: string;
    label: string;
    extension: Extension
    type: string;
}

export const themeOptions: ThemeOption[] = [
    {
        value: 'andriodstudio',
        label: 'Andriod Studio',
        extension: androidstudio,
        type: 'dark'
    },
    {
        value: 'githubdark',
        label: 'Github Dark',
        extension: githubDark,
        type: 'dark'
    },
    {
        value: 'githublight',
        label: 'Github Light',
        extension: githubLight,
        type: 'light'
    },
    {
        value: 'tokyoNightStorm',
        label: 'Tokyo Night Storm',
        extension: tokyoNightStorm,
        type: 'dark'
    },
    {
        value: 'tomorrowNightBlue',
        label: 'Tomorrow Night Blue',
        extension: tomorrowNightBlue,
        type: 'dark'
    },
    {
        value: 'abyss',
        label: 'Abyss',
        extension: abyss,
        type: 'dark'
    },
    {
        value: 'andromeda',
        label: 'Andromeda',
        extension: andromeda,
        type: 'dark'
    },
    {
        value: 'aura',
        label: 'Aura',
        extension: aura,
        type: 'dark'
    },
    {
        value: 'eclipse',
        label: 'Eclipse',
        extension: eclipse,
        type: 'light'
    }

]