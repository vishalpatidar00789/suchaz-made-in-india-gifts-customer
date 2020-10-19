module.exports = function (api) {
    
    const presets = ['next/babel'];
    const plugins = [
        [
            'styled-components',
            {
                ssr: true,
                displayName: !api.env("production")
            },
        ],
    ];
    api.cache(true);

    return {
        presets,
        plugins,
    };
};
