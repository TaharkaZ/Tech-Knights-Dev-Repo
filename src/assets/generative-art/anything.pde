color NAVYBLUE = color(26, 24, 67);
color PINK = color(207, 98, 140);
color REDPINK = color(98, 52, 108);
color LIGHTBLUE = color(92, 104, 212);
color PALEYELLOW = color(231, 210, 124);
color PINKRED = color(198, 66, 99);
color PALENAVYBLUE = color(78, 65, 100);
color PURPLE = color(129, 54, 139);
color PURPLEGRAY = color(121, 90, 138);
color CHARCOAL = color(70, 70, 70);

ArrayList colorPalette = new ArrayList();
colorPalette.add(NAVYBLUE);
colorPalette.add(PINK);
colorPalette.add(REDPINK);
colorPalette.add(LIGHTBLUE);
colorPalette.add(PALEYELLOW);
colorPalette.add(PINKRED);
colorPalette.add(PALENAVYBLUE);
colorPalette.add(PURPLE);
colorPalette.add(PURPLEGRAY);
colorPalette.add(CHARCOAL);

ArrayList comets = new ArrayList();

void setup()
{
    size(1600, 900);
    background(NAVYBLUE);
    fill(REDPINK);
    noStroke();
}

void draw() {
    background(NAVYBLUE);

    float toAdd = random();
    if (toAdd > 0.95) {
        comets.add(new Comet());
    }

    ArrayList toRemove = new ArrayList();
    for (Comet c : comets) {
        c.update();
        if (c.oob()) {
            toRemove.add(c);
        }
        c.display();
    }
    for (Comet c : toRemove) {
        comets.remove(c);
    }
}


class Comet {

    PVector pos;
    PVector vel = new PVector(-2, 2);
    int length = 50;

    Comet() {
        float x = random(width/4, width*5/4);
        float y = -length;
        pos = new PVector(x, y);
    }

    boolean oob() {
        if (pos.x < -length*2) {
            return true;
        }
        if (pos.y > height + length*2) {
            return true;
        }
        return false;
    }

    void update() {
        pos.add(vel);
    }

    void display() {
        PVector drawPos = new PVector(pos.x, pos.y);
        for (int i = 0; i < length; i++) {
            float radius = map(i, 0, length, 20, 5);
            float amt = map(i, 0, length, 0, 1);
            float alpha = map(i, 0, length, 255, 10);
            color c = lerpColor(PALEYELLOW, PINKRED, amt);
            drawPos.sub(vel);
            fill(c, alpha);
            ellipse(drawPos.x, drawPos.y, radius, radius);
        }
    }
}
