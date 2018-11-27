const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const SHIPPING = 20; // In USD

class SupremeCalcCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'sup',
            group: 'supreme',
            memberName: 'sup',
            description: 'Enter a retail price, it will calculate the total in CAD. Example: !sup 32'
        });
    }

    async run(message, args)
    {
        var input = args;
        // Check if user passes a number
        if(isNaN(input)){
            message.channel.send("That is not a number. Please try again");
        }
        else{
            var subTotal = parseInt(input);
            var duties = (subTotal * 0.17).toFixed(2); // Duties = 17% of subtotal
            var tax = (subTotal * 0.13).toFixed(2); // Taxes = 13% of subtotal

            // Grand total in USD
            var usdTotal = (subTotal + parseFloat(duties) + parseFloat(tax) + SHIPPING).toFixed(2);

            // Grand total in CAD
            var cadTotal = (usdTotal * 1.30).toFixed(2);

            const embed = new RichEmbed()
                .setTitle("🇨🇦Supreme Calculator🇨🇦")
                .addField("Subtotal", subTotal)
                .addField("Shipping", SHIPPING.toFixed(2))
                .addField("Tax", tax)
                .addField("Duties", duties)
                .addField("🇺🇸Total USD🇺🇸", usdTotal, true)
                .addField("🇨🇦Total CAD🇨🇦", cadTotal, true)
                .setFooter("GitHub: @ErinOMarra", "http://i.imgur.com/8kHVpAp.png")
            return message.embed(embed);
        }
    }
}

module.exports = SupremeCalcCommand;