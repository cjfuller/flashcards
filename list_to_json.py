import sys


def main(filename):
    with open(filename, 'r') as f:
        lines = [line for line in f]
        for line in lines:
            front, back = line.strip().split('::')
            front = front.strip().replace('"', '\\"')
            back = back.strip().replace('"', '\\"')
            print('\n'.join([
                '    {',
                f'        front: "{front}",',
                f'        back: "{back}",',
                '    },',
            ]))


if __name__ == '__main__':
    main(sys.argv[1])
