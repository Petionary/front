module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ['react', 'prettier', 'react-hooks', '@typescript-eslint'],
    extends: [
        'eslint:recommended', // 기본 ESLint 규칙
        'plugin:react/recommended', // React 규칙
        'plugin:prettier/recommended', // Prettier 규칙과 충돌하는 규칙 비활성화
        'prettier', // Prettier 관련 규칙
        'plugin:react-hooks/recommended', // React Hooks 규칙
        'plugin:@typescript-eslint/recommended', // TypeScript 규칙
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['node_modules/', '.next/*'],
    rules: {
        // 0 false, 1 warn, 2 error
        'for-direction': 2, // for 루프의 방향이 예상과 다를 경우 에러 발생
        'no-undef': 2, // 선언되지 않은 변수 사용시 에러 발생
        'no-console': 'off', // 콘솔 사용 허용
        'no-empty': 2, // 빈 블록문 사용시 에러 발생
        'no-dupe-args': 2, // 중복된 함수 인자 사용시 에러 발생
        'no-dupe-keys': 2, // 중복된 객체 키 사용시 에러 발생
        'no-unreachable': 2, // 도달할 수 없는 코드 발생시 에러 발생
        'no-unused-vars': 1, // 선언 후 사용되지 않는 변수에 경고 표시
        'no-case-declarations': 2, // case문에서 변수 선언 사용시 에러 발생
        // 'no-control-regex': 0, // 제어문자를 정규식에 사용해도 경고를 표시하지 않음
        'no-extra-boolean-cast': 0, // 불필요한 부울형 변환에 대한 경고를 표시하지 않음
        'react/jsx-key': 2, // JSX 요소에 대한 고유한 key 속성이 누락되면 에러 발생
        'react/jsx-no-duplicate-props': 2, // 중복된 JSX 프로퍼티 사용시 에러 발생
        'react/jsx-no-undef': 2, // 정의되지 않은 JSX 컴포넌트 사용시 에러 발생
        'react/jsx-uses-vars': 2, // 사용되지 않는 JSX 변수에 대한 에러 발생
        'react/no-children-prop': 2, // 컴포넌트에 children prop 사용시 에러 발생
        'react/no-deprecated': 2, // 사용이 중단된 메서드 또는 기능 사용시 에러 발생
        'react/no-direct-mutation-state': 2, // state를 직접 변경하면 에러 발생
        'react/no-is-mounted': 2, // isMounted 메서드 사용시 에러 발생
        'react/no-render-return-value': 2, // render 함수에서 반환 값을 사용하지 않으면 에러 발생
        'react/no-unknown-property': 2, // 알 수 없는 속성 사용시 에러 발생
        'react/require-render-return': 2, // render 함수에서 값을 반환하지 않으면 에러 발생
        'react-hooks/rules-of-hooks': 'error', // React Hooks 규칙 준수 여부 검사
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)', // Recoil Hooks를 사용하는 경우 추가적인 의존성 검사
            },
        ],
        'no-mixed-spaces-and-tabs': 0, // 스페이스와 탭 혼용을 허용
        '@typescript-eslint/no-var-requires': 0, // TypeScript에서 require 사용을 허용

        // 중첩된 삼항 연산자 허용
        'no-nested-ternary': 0,

        // Prettier 규칙을 적용하고, 개행문자를 자동으로 감지하고, 탭 사용 비허용
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                useTabs: false,
            },
        ],

        // 들여쓰기를 4칸으로 강제함
        indent: ['error', 4],
    },
};
