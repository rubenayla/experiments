var turtle = require('turtle');
levels = 5;
turtle.speed(0);
screenSize = 1000;
angle = 60;
turtle.screensize(screenSize,screenSize);
displacement = screenSize/3 // Each of the 3 steps in level 1

turtle.pu()  // Pen up/down and set position
turtle.setpos(-screenSize/2,0);
turtle.pd();
path = 'f+f--f+f'  // The pattern
i = 0;
#// which is the path?. We increase the fractalPath with the path pattern, putting it in the auxPath (which begins being equal to the ). Then our auxPath is the fractalPath
fractalPath = path;
auxPath = fractalPath;
for (step in range(1, levels)) {
    auxPath = fractalPath  // (Previous)
    fractalPath = ''  // The fractal that we want
    for (i in range(0, len(auxPath))) {
        if (auxPath[i] == 'f': fractalPath += path;
        } else if (auxPath[i] == '+': fractalPath += '+';
        else: fractalPath += '-';

displacement /= 3**(levels-1);
#console.log(fractalPath);
#// walk the auxPath
for (i in range(0, len(fractalPath)) {
    if (fractalPath[i] == 'f': turtle.fd(displacement);
    } else if (fractalPath[i] == '+': turtle.lt(angle);
    else: turtle.lt(-angle);
) {
le;})
) {
le;    });

}