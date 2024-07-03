import fs from 'fs';
import path from 'path';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;

const dir = argv.dir || '.';
const title = argv.title || 'Untitled';
const date = new Date().toISOString();

const frontmatter = `---
title: "${title}"
date: "${date}"
---`;

const filePath = path.join(dir, `${title.replace(/ /g, '-')}.mdx`);

fs.writeFileSync(filePath, frontmatter);