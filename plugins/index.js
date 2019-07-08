function removePlugin(plugins, name) {
  const indices = [];
  plugins.forEach((plugin, i) => {
    const n = Array.isArray(plugin) ? plugin[0] : plugin;

    if (n === name) {
      indices.unshift(i);
    }
  });

  for (const i of indices) {
    plugins.splice(i, 1);
  }
}

module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      }
    },
    // manipulateOptions(opts, parserOpts) {
    //   const { plugins } = parserOpts;
    //   // If the Flow syntax plugin already ran, remove it since Typescript
    //   // takes priority.
    //   removePlugin(plugins, "flow");

    //   // If the JSX syntax plugin already ran, remove it because JSX handling
    //   // in TS depends on the extensions, and is purely dependent on 'isTSX'.
    //   removePlugin(plugins, "jsx");

    //   parserOpts.plugins.push(
    //     "typescript",
    //     "classProperties",
    //     // TODO: This is enabled by default now, remove in Babel 8
    //     "objectRestSpread",
    //   );
    // }
  };
}

