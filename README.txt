personal website so i can learn about web developement / playground for trying out cool stuff

design direction:
try to mask relevant information from webcrawlers.
when implement scripts test without them.
audit image/file metadata before hosting.
the site should be under 1MB in size, included hosted data.
have fun; don't stress about it.
less is more.

how it works:
style.js	decides between two css depending on browser time.
random.js	shows a random line from a list.
katze.js	animation of ascii cat.

comments:
look into high contrast mode and keyboard navigation.
think about how people with disabilities interact with the site.
maybe the cat's head could follow the cursor from side to side?

license:
idk... all rights reserved where applicable
Nimbus Sans L is licensed under the GNU General Public License (GPL)

bug1: FIXED by providing a font file
inconsistent rendering of the ascii art through different devices
main developement and initial testing is performed on ubuntu with firefox
on android with chrome the cat does not look right
proposed solution: use images instead of javascript or host the characterset.
