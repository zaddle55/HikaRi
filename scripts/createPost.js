
const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('title', {
        alias: 't',
        type: 'string',
        description: 'Set post title'
    })
    .option('isMDX', {
        alias: 'x',
        type: 'boolean',
        default: 'false',
        description: 'If this post is mdx'
    })
    .option('isDraft', {
        alias: 'd',
        type: 'boolean',
        default: 'false',
        description: 'If this post is a draft'
    })
    .help()
    .argv;

const dir = './app/data/blog'

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1; // getMonth() 返回的月份从 0 开始
let day = date.getDate();

// 如果月份和日期是一位数，前面补零
month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;

let formattedDate = `${year}-${month}-${day}`; // 转换为'yyyy-MM-dd'格式

const title = argv.title || 'Untitled';
const isMDX = argv.isMDX;
const isDraft = argv.isDraft;

const frontmatter = `---
title: ${title}
date: '${formattedDate}'
tags: []
draft: ${isDraft}
summary:
---`;

const filePath = path.join(dir, `${title.replace(/ /g, '-')}.${isMDX=='true' ? 'mdx' : 'md'}`);

fs.writeFileSync(filePath, frontmatter);